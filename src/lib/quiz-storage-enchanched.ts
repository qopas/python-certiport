// lib/quiz-storage-enhanced.ts
import { QuizSession, QuizMode } from './quiz-mode-types';
import { Question } from './types';

interface StoredQuizData {
  sessionId: string;
  mode: QuizMode;
  questions: Question[];
  currentQuestionIndex: number;
  answers: (string | string[] | { [key: string]: string } | null)[];
  flaggedQuestions: number[];
  timeRemaining?: number;
  startTime: string;
  lastUpdated: string;
}

class QuizStorageManager {
  private static readonly TRAINING_KEY = 'quiz_training_session';
  private static readonly TESTING_KEY = 'quiz_testing_session';
  
  private getStorageKey(mode: QuizMode): string {
    return mode === 'training' ? QuizStorageManager.TRAINING_KEY : QuizStorageManager.TESTING_KEY;
  }

  saveSession(session: QuizSession): void {
    if (typeof window === 'undefined') return;

    try {
      const storageData: StoredQuizData = {
        sessionId: session.sessionId,
        mode: session.mode,
        questions: session.questions,
        currentQuestionIndex: session.currentQuestionIndex,
        answers: session.answers,
        flaggedQuestions: session.flaggedQuestions,
        timeRemaining: session.timeRemaining,
        startTime: session.startTime.toISOString(),
        lastUpdated: new Date().toISOString()
      };

      const key = this.getStorageKey(session.mode);
      localStorage.setItem(key, JSON.stringify(storageData));
      
      console.log(`${session.mode} session saved to localStorage`);
    } catch (error) {
      console.error('Error saving quiz session:', error);
    }
  }

  loadSession(mode: QuizMode): QuizSession | null {
    if (typeof window === 'undefined') return null;

    try {
      const key = this.getStorageKey(mode);
      const stored = localStorage.getItem(key);
      
      if (!stored) return null;

      const data: StoredQuizData = JSON.parse(stored);
      
      // Verify the session is for the correct mode
      if (data.mode !== mode) {
        console.warn(`Mode mismatch in stored session. Expected: ${mode}, Found: ${data.mode}`);
        this.clearSession(mode);
        return null;
      }

      const session: QuizSession = {
        sessionId: data.sessionId,
        mode: data.mode,
        questions: data.questions,
        currentQuestionIndex: data.currentQuestionIndex,
        answers: data.answers,
        flaggedQuestions: data.flaggedQuestions,
        timeRemaining: data.timeRemaining,
        startTime: new Date(data.startTime),
        config: data.mode === 'training' ? {
          mode: 'training',
          hasTimeLimit: false,
          showImmediateFeedback: true,
          saveResults: false,
          allowReview: true
        } : {
          mode: 'testing',
          hasTimeLimit: true,
          showImmediateFeedback: false,
          saveResults: true,
          allowReview: false,
          timeLimit: 50 * 60
        }
      };

      console.log(`${mode} session loaded from localStorage`);
      return session;
    } catch (error) {
      console.error('Error loading quiz session:', error);
      this.clearSession(mode);
      return null;
    }
  }

  updateSession(mode: QuizMode, updates: Partial<QuizSession>): void {
    const existingSession = this.loadSession(mode);
    if (!existingSession) return;

    const updatedSession = { ...existingSession, ...updates };
    this.saveSession(updatedSession);
  }

  clearSession(mode: QuizMode): void {
    if (typeof window === 'undefined') return;

    try {
      const key = this.getStorageKey(mode);
      localStorage.removeItem(key);
      console.log(`${mode} session cleared from localStorage`);
    } catch (error) {
      console.error('Error clearing quiz session:', error);
    }
  }

  hasActiveSession(mode: QuizMode): boolean {
    return this.loadSession(mode) !== null;
  }

  clearAllSessions(): void {
    this.clearSession('training');
    this.clearSession('testing');
  }

  getSessionProgress(mode: QuizMode): { current: number; total: number; percentage: number } | null {
    const session = this.loadSession(mode);
    if (!session) return null;

    return {
      current: session.currentQuestionIndex + 1,
      total: session.questions.length,
      percentage: Math.round(((session.currentQuestionIndex + 1) / session.questions.length) * 100)
    };
  }

  // Training mode specific methods
  saveTrainingProgress(
    sessionId: string,
    currentIndex: number,
    answers: (string | string[] | { [key: string]: string } | null)[],
    flaggedQuestions: number[]
  ): void {
    this.updateSession('training', {
      currentQuestionIndex: currentIndex,
      answers,
      flaggedQuestions
    });
  }

  // Testing mode specific methods  
  saveTestingProgress(
    sessionId: string,
    currentIndex: number,
    answers: (string | string[] | { [key: string]: string } | null)[],
    flaggedQuestions: number[],
    timeRemaining: number
  ): void {
    this.updateSession('testing', {
      currentQuestionIndex: currentIndex,
      answers,
      flaggedQuestions,
      timeRemaining
    });
  }

  getTimeRemaining(mode: QuizMode): number | null {
    if (mode === 'training') return null; // Training has no time limit
    
    const session = this.loadSession('testing');
    if (!session || !session.timeRemaining) return null;

    return session.timeRemaining;
  }

  isSessionExpired(mode: QuizMode): boolean {
    if (mode === 'training') return false; // Training never expires
    
    const session = this.loadSession('testing');
    if (!session) return false;

    return session.timeRemaining !== undefined && session.timeRemaining <= 0;
  }
}

// Export singleton instance
export default new QuizStorageManager();