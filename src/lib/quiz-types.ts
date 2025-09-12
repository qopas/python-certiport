// Extended quiz types for the new system
export type QuizType = 'python' | 'database' | 'networking';
export type QuizMode = 'training' | 'testing';

export interface QuizCategory {
  id: QuizType;
  title: string;
  description: string;
  icon: string;
  color: string;
  isAvailable: boolean;
  questionsCount: number;
}

export interface ExtendedQuizModeConfig {
  mode: QuizMode;
  quizType: QuizType;
  hasTimeLimit: boolean;
  timeLimit: number; // in seconds
  questionsPerQuiz: number;
  allowReview: boolean;
  showFeedback: boolean;
  saveResults: boolean;
}

export interface QuizTypeStats {
  attempts: number;
  averageScore: number;
  bestScore: number;
  totalTime: number;
  lastAttempt?: string;
}

export interface UserQuizStats {
  python: QuizTypeStats;
  database: QuizTypeStats;
  networking: QuizTypeStats;
  overall: {
    totalAttempts: number;
    overallAverage: number;
    bestOverallScore: number;
    totalStudyTime: number;
  };
}

export const QUIZ_CATEGORIES: QuizCategory[] = [
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Core Python concepts, syntax, data structures, and best practices',
    icon: 'Code2',
    color: 'from-blue-500 to-blue-600',
    isAvailable: true,
    questionsCount: 450
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'SQL, database design, normalization, and data modeling',
    icon: 'Database',
    color: 'from-green-500 to-green-600',
    isAvailable: false, // Will be enabled when questions are added
    questionsCount: 0
  },
  {
    id: 'networking',
    title: 'Network Security',
    description: 'Network protocols, security, infrastructure, and troubleshooting',
    icon: 'Network',
    color: 'from-purple-500 to-purple-600',
    isAvailable: false, // Will be enabled when questions are added
    questionsCount: 0
  }
];

export const getQuizModeConfig = (mode: QuizMode, quizType: QuizType): ExtendedQuizModeConfig => {
  const baseConfig = {
    mode,
    quizType,
  };

  switch (mode) {
    case 'training':
      return {
        ...baseConfig,
        hasTimeLimit: false,
        timeLimit: 0,
        questionsPerQuiz: 20,
        allowReview: true,
        showFeedback: true,
        saveResults: false
      };
    
    case 'testing':
      return {
        ...baseConfig,
        hasTimeLimit: true,
        timeLimit: 3000, // 50 minutes
        questionsPerQuiz: 42,
        allowReview: false,
        showFeedback: false,
        saveResults: true
      };
    
    default:
      throw new Error(`Invalid quiz mode: ${mode}`);
  }
};

