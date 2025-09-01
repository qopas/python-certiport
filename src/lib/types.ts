
export interface Question {
  id: number;
  domain: string;
  type: "multiple_choice" | "multiple_select" | "fill_in_blank" | "multiple_response" | "true_false" | "ordering";
  question: string;
  options?: string[] | { [key: string]: string[] }; // Support both array and object formats for fill_in_blank
  answer: string | string[] | { [key: string]: string }; // Support object format for fill_in_blank answers
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