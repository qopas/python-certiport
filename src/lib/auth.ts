// lib/auth.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from './db';

const JWT_SECRET = process.env.JWT_SECRET!;

export interface User {
  id: number;
  email: string;
  full_name: string;
  class_id: number | null;
  role: 'user' | 'admin';
  is_active: boolean;
}

export interface AuthResult {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// Verify password
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Generate JWT token
export function generateToken(user: User): string {
  return jwt.sign(
    { 
      userId: user.id, 
      email: user.email,
      full_name: user.full_name, // Make sure this is included
      role: user.role,
      classId: user.class_id
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
}

// Verify JWT token
export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// Login user
export async function loginUser(email: string, password: string): Promise<AuthResult> {
  try {
    const result = await query(
      `SELECT id, email, password_hash, full_name, class_id, role, is_active
       FROM users 
       WHERE email = $1 AND is_active = true`,
      [email]
    );

    if (result.rows.length === 0) {
      return { success: false, message: 'Invalid email or password' };
    }

    const user = result.rows[0];
    const isValidPassword = await verifyPassword(password, user.password_hash);

    if (!isValidPassword) {
      return { success: false, message: 'Invalid email or password' };
    }

    // Update last login
    await query(
      'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1',
      [user.id]
    );

    const { password_hash, ...userWithoutPassword } = user;
    const token = generateToken(userWithoutPassword);

    return { success: true, user: userWithoutPassword, token };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'Login failed' };
  }
}

// Get user by ID
export async function getUserById(userId: number): Promise<User | null> {
  try {
    const result = await query(
      `SELECT id, email, full_name, class_id, role, is_active
       FROM users WHERE id = $1 AND is_active = true`,
      [userId]
    );

    return result.rows[0] || null;
  } catch (error) {
    console.error('Get user error:', error);
    return null;
  }
}

// Create new user (admin only)
export async function createUser(
  email: string,
  fullName: string,
  classId: number,
  password?: string
): Promise<AuthResult> {
  try {
    // Check if user already exists
    const existingUser = await query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return { success: false, message: 'User with this email already exists' };
    }

    // Use provided password or default
    const userPassword = password || process.env.DEFAULT_USER_PASSWORD || 'TempPass123';
    const passwordHash = await hashPassword(userPassword);

    const result = await query(
      `INSERT INTO users (email, password_hash, full_name, class_id) 
       VALUES ($1, $2, $3, $4) 
       RETURNING id, email, full_name, class_id, role, is_active`,
      [email, passwordHash, fullName, classId]
    );

    const user = result.rows[0];
    return { success: true, user };
  } catch (error) {
    console.error('Create user error:', error);
    return { success: false, message: 'Failed to create user' };
  }
}