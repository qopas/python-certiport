export interface Question {
  id: number;
  domain: string;
  type: "multiple_choice" | "multiple_select" | "fill_in_blank";
  question: string;
  options?: string[];
  answer: string | string[];
  explanation: string;
}

export interface QuizSubmission {
  id: string;
  userName: string;
  userEmail?: string;
  answers: (string | string[] | null)[];
  score: number;
  percentage: number;
  timeSpent: number;
  timestamp: string;
  questionDetails: QuestionResult[];
}

export interface QuestionResult {
  questionId: number;
  domain: string;
  question: string;
  userAnswer: string | string[] | null;
  correctAnswer: string | string[];
  isCorrect: boolean;
  explanation: string;
}

export interface AdminCredentials {
  username: string;
  password: string;
}