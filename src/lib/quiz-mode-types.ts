import { Question, QuestionResult, QuizSubmission } from './types';

export type QuizMode = 'training' | 'testing';

export interface QuizModeConfig {
  mode: QuizMode;
  hasTimeLimit: boolean;
  showImmediateFeedback: boolean;
  saveResults: boolean;
  allowReview: boolean;
  timeLimit?: number; // in seconds
}

export interface QuizSession {
  sessionId: string;
  mode: QuizMode;
  questions: Question[]; // Using your existing Question interface
  currentQuestionIndex: number;
  answers: (string | string[] | { [key: string]: string } | null)[];
  flaggedQuestions: number[];
  timeRemaining?: number;
  startTime: Date;
  config: QuizModeConfig;
}

export interface TrainingResult {
  questionId: number;
  domain: string;
  question: string;
  userAnswer: string | string[] | { [key: string]: string } | null;
  correctAnswer: string | string[] | { [key: string]: string };
  isCorrect: boolean;
  explanation: string;
  timeSpent?: number;
}

export interface TrainingSubmission {
  sessionId: string;
  mode: 'training';
  score: number;
  totalQuestions: number;
  percentage: number;
  questionResults: TrainingResult[];
  isFlagged?: number[];
}

// Extend your existing QuizSubmission for testing mode
export interface TestingSubmission extends QuizSubmission {
  mode: 'testing';
  sessionId: string;
}