
export interface Question {
  id: number;
  domain: string;
  type: "multiple_choice" | "multiple_select" | "fill_in_blank" | "multiple_response" | "true_false" | "ordering";
  question: string;
  options?: string[] | { [key: string]: string[] | string }; // Allow both string arrays and strings
  answer: string | string[] | { [key: string]: string };
  explanation: string;
}


export interface QuizSubmission {
  id: string;
  userName: string;
  userEmail?: string;
  answers: (string | string[] | { [key: string]: string } | null)[];
  score: number;
  percentage: number;
  timeSpent: number;
  timestamp: string;
  className: number;
  classId: number;
  questionDetails: QuestionResult[];
}

export interface QuestionResult {
  questionId: number;
  domain: string;
  question: string;
  userAnswer: string | string[] | { [key: string]: string } | null;
  correctAnswer: string | string[] | { [key: string]: string };
  isCorrect: boolean;
  explanation: string;
}

export interface AdminCredentials {
  username: string;
  password: string;
}