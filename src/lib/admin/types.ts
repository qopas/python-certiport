// Response shapes of the /api/admin/* routes. Types only: safe to import from client components.

export interface Page<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface AdminSummary {
  totalStudents: number;
  totalSubmissions: number;
  averageScore: number;
  totalClasses: number;
}

export interface SubmissionRow {
  id: number;
  userName: string;
  userEmail: string;
  classId: number | null;
  className: string | null;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpent: number;
  completedAt: string;
}

export interface SubmissionStats {
  count: number;
  averageScore: number;
  averageTime: number;
  highestScore: number;
}

export interface SubmissionList extends Page<SubmissionRow> {
  stats: SubmissionStats;
}

// Every *Html field is safe to render: it is either trusted question-bank HTML or escaped text.
export interface QuestionView {
  questionId: number;
  domain: string;
  type: string;
  isCorrect: boolean;
  questionHtml: string;
  // Answer options from the question bank, when the stored question still matches it.
  options: { html: string; correct: boolean }[] | null;
  correctAnswerHtml: string;
  userAnswerHtml: string | null;
  explanationHtml: string | null;
}

export interface SubmissionDetail extends SubmissionRow {
  questions: QuestionView[];
}

export interface WrongAnswerView {
  userName: string;
  userAnswerHtml: string | null;
}

export interface QuestionStat {
  questionId: number;
  domain: string;
  totalAttempts: number;
  correctAttempts: number;
  successRate: number;
  view: QuestionView;
  wrongAnswers: WrongAnswerView[];
  wrongAnswerCount: number;
}

export interface QuestionAnalytics {
  submissionsAnalyzed: number;
  questions: QuestionStat[];
}

export interface AdminUser {
  id: number;
  email: string;
  fullName: string;
  classId: number | null;
  className: string | null;
  isActive: boolean;
  createdAt: string;
  lastLogin: string | null;
}

export interface AdminClass {
  id: number;
  name: string;
  description: string | null;
  userCount: number;
  createdAt: string;
}

export interface RosterStudent {
  id: number;
  fullName: string;
  email: string;
  classId: number | null;
  className: string | null;
}
