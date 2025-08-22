-- Database schema for quiz application
-- Run this in your Neon database console

-- Classes table
CREATE TABLE classes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  created_by_admin_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  class_id INTEGER REFERENCES classes(id) ON DELETE SET NULL,
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP
);

-- Quiz sessions for persistence
CREATE TABLE quiz_sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  session_token VARCHAR(255) UNIQUE NOT NULL,
  questions_json JSONB NOT NULL, -- Selected questions for this quiz
  current_question_index INTEGER DEFAULT 0,
  answers_json JSONB DEFAULT '[]'::jsonb, -- User's answers so far
  time_remaining INTEGER NOT NULL, -- Seconds left
  started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Completed quiz submissions
CREATE TABLE quiz_submissions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  class_id INTEGER REFERENCES classes(id) ON DELETE SET NULL,
  submission_id VARCHAR(100) UNIQUE NOT NULL, -- Your current format
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  total_time INTEGER NOT NULL, -- Total time taken in seconds
  started_at TIMESTAMP NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  questions_and_answers JSONB NOT NULL -- Full quiz data
);

-- Indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_class_id ON users(class_id);
CREATE INDEX idx_quiz_sessions_user_id ON quiz_sessions(user_id);
CREATE INDEX idx_quiz_sessions_token ON quiz_sessions(session_token);
CREATE INDEX idx_quiz_submissions_user_id ON quiz_submissions(user_id);
CREATE INDEX idx_quiz_submissions_class_id ON quiz_submissions(class_id);
CREATE INDEX idx_quiz_submissions_completed_at ON quiz_submissions(completed_at);

-- Insert default admin user and class
INSERT INTO classes (name, description) VALUES 
('Default Class', 'Default class for new users');

-- Insert admin user (password: admin123 - should be changed after setup)
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('admin@quiz.com', '$2b$12$LQv3c1yqBw2dqZm1y5f9GOzZTgZJqp6HrD5YI0DmT.F7.d5FgOhNK', 'Quiz Administrator', 'admin');