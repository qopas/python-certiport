// lib/quiz-storage.ts
import { Question } from './types';

interface QuizSession {
  userId: number;
  sessionId: string;
  questions: Question[];
  currentQuestionIndex: number;
  answers: (string | string[] | null)[];
  flaggedQuestions?: number[]; // Add flagged questions support
  timeRemaining: number;
  startTime: string;
  lastUpdated: string;
}

const STORAGE_KEY = 'quiz_session';
const SESSION_EXPIRY_HOURS = 24;

export default class QuizStorage {
  // Check if localStorage is available
  private static isStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && !!window.localStorage;
    } catch {
      return false;
    }
  }

  // Save quiz session to localStorage
  static saveSession(session: QuizSession): boolean {
    if (!this.isStorageAvailable()) return false;
    
    try {
      const sessionWithTimestamp = {
        ...session,
        lastUpdated: new Date().toISOString()
      };
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionWithTimestamp));
      console.log('Quiz session saved to localStorage');
      return true;
    } catch (error) {
      console.error('Failed to save quiz session:', error);
      return false;
    }
  }

  // Load quiz session from localStorage
  static loadSession(userId: number): QuizSession | null {
    if (!this.isStorageAvailable()) return null;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return null;

      const session: QuizSession = JSON.parse(stored);
      
      // Check if session belongs to current user
      if (session.userId !== userId) {
        console.log('Session belongs to different user, clearing');
        this.clearSession();
        return null;
      }

      // Check if session has expired
      const lastUpdated = new Date(session.lastUpdated);
      const now = new Date();
      const hoursDiff = (now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60);
      
      if (hoursDiff > SESSION_EXPIRY_HOURS) {
        console.log('Session expired, clearing');
        this.clearSession();
        return null;
      }

      console.log('Quiz session loaded from localStorage');
      return session;
    } catch (error) {
      console.error('Failed to load quiz session:', error);
      this.clearSession(); // Clear corrupted data
      return null;
    }
  }

  // Update specific fields of the session
  static updateSession(updates: Partial<QuizSession>): boolean {
    if (!this.isStorageAvailable()) return false;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return false;

      const session: QuizSession = JSON.parse(stored);
      const updatedSession = {
        ...session,
        ...updates,
        lastUpdated: new Date().toISOString()
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSession));
      return true;
    } catch (error) {
      console.error('Failed to update quiz session:', error);
      return false;
    }
  }

  // Clear quiz session
  static clearSession(): void {
    if (!this.isStorageAvailable()) return;
    
    try {
      localStorage.removeItem(STORAGE_KEY);
      console.log('Quiz session cleared from localStorage');
    } catch (error) {
      console.error('Failed to clear quiz session:', error);
    }
  }

  // Check if there's an active session for user
  static hasActiveSession(userId: number): boolean {
    const session = this.loadSession(userId);
    return session !== null;
  }

  // Get session summary for dashboard
  static getSessionSummary(userId: number): {
    hasSession: boolean;
    progress?: number;
    timeRemaining?: number;
    startedAt?: string;
    currentQuestion?: number;
    totalQuestions?: number;
    flaggedCount?: number; // Add flagged count to summary
  } {
    const session = this.loadSession(userId);
    
    if (!session) {
      return { hasSession: false };
    }

    return {
      hasSession: true,
      progress: Math.round(((session.currentQuestionIndex + 1) / session.questions.length) * 100),
      timeRemaining: session.timeRemaining,
      startedAt: session.startTime,
      currentQuestion: session.currentQuestionIndex + 1,
      totalQuestions: session.questions.length,
      flaggedCount: session.flaggedQuestions?.length || 0
    };
  }
}