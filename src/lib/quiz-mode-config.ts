// lib/quiz-mode-config.ts
import { QuizModeConfig, QuizMode, QuizSession } from './quiz-mode-types';
import { Question } from './types';

export const QUIZ_MODE_CONFIGS: Record<QuizMode, QuizModeConfig> = {
  training: {
    mode: 'training',
    hasTimeLimit: false,
    showImmediateFeedback: true,
    saveResults: false, // Training results are not saved
    allowReview: true,
    timeLimit: undefined
  },
  testing: {
    mode: 'testing',
    hasTimeLimit: true,
    showImmediateFeedback: false,
    saveResults: true, // Testing results are saved to database
    allowReview: false,
    timeLimit: 50 * 60 // 50 minutes in seconds
  }
};

export const getQuizModeConfig = (mode: QuizMode): QuizModeConfig => {
  return QUIZ_MODE_CONFIGS[mode];
};

export const createQuizSession = (
  sessionId: string,
  mode: QuizMode,
  questions: Question[] // Using your existing Question interface
): QuizSession => {
  const config = getQuizModeConfig(mode);
  
  return {
    sessionId,
    mode,
    questions,
    currentQuestionIndex: 0,
    answers: new Array(questions.length).fill(null),
    flaggedQuestions: [],
    timeRemaining: config.timeLimit,
    startTime: new Date(),
    config
  };
};