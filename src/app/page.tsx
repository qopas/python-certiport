'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, XCircle, Trophy } from 'lucide-react';
import { quizQuestions } from '@/lib/questions';
import { Question, QuizSubmission, QuestionResult } from '@/lib/types';
import { formatTime } from '@/lib/utils';

const QUIZ_TIME_LIMIT = 50 * 60; // 50 minutes in seconds
const QUESTIONS_PER_QUIZ = 42; // Number of questions per quiz

export default function QuizPage() {
  const [stage, setStage] = useState<'start' | 'quiz' | 'results'>('start');
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | string[] | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_LIMIT);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [results, setResults] = useState<QuizSubmission | null>(null);
  const selectRandomQuestions = () => {
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, QUESTIONS_PER_QUIZ);
    };

  // Timer effect
  useEffect(() => {
    if (stage === 'quiz' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            submitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [stage, timeLeft]);

  const startQuiz = () => {
    if (!userName.trim()) {
      alert('Please enter your name');
      return;
    }

    const randomQuestions = selectRandomQuestions();
    setSelectedQuestions(randomQuestions);
    
    setStage('quiz');
    setStartTime(new Date());
    setAnswers(new Array(randomQuestions.length).fill(null));
  };

  const handleAnswer = (answer: string | string[]) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = async () => {
    if (!startTime) return;

    const endTime = new Date();
    const timeSpent = Math.round((endTime.getTime() - startTime.getTime()) / 1000);
    
    let score = 0;
    const questionResults: QuestionResult[] = selectedQuestions.map((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = Array.isArray(question.answer) 
        ? Array.isArray(userAnswer) && 
          question.answer.length === userAnswer.length && 
          question.answer.every(ans => userAnswer.includes(ans))
        : userAnswer === question.answer;
      
      if (isCorrect) score++;

      return {
        questionId: question.id,
        domain: question.domain,
        question: question.question,
        userAnswer,
        correctAnswer: question.answer,
        isCorrect,
        explanation: question.explanation
      };
    });

    const submission: QuizSubmission = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      userName,
      userEmail: userEmail || undefined,
      answers,
      score,
      percentage: Math.round((score / selectedQuestions.length) * 100),
      timeSpent,
      timestamp: new Date().toISOString(),
      questionDetails: questionResults
    };

    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission)
      });

      setResults(submission);
      setStage('results');
    } catch (error) {
      console.error('Error submitting quiz:', error);
      setResults(submission);
      setStage('results');
    }
  };

 const restartQuiz = () => {
  setStage('start');
  setCurrentQuestion(0);
  setAnswers([]);
  setSelectedQuestions([]); 
  setTimeLeft(QUIZ_TIME_LIMIT);
  setStartTime(null);
  setResults(null);
  setUserName('');
  setUserEmail('');
};
  if (stage === 'start') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              🐍 Python IT Specialist Quiz
            </CardTitle>
            <p className="text-gray-600">Test your Python knowledge</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Quiz Details:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• {QUESTIONS_PER_QUIZ} questions (randomly selected)</li>
<li>• From a pool of {quizQuestions.length} total questions</li>
                <li>• 50 minutes time limit</li>
                <li>• Multiple choice questions</li>
                <li>• Results shown immediately</li>
              </ul>
            </div>
            <Button onClick={startQuiz} className="w-full" size="lg">
              Start Quiz
            </Button>
            <div className="text-center pt-4 border-t">
              <a 
                href="/admin/login" 
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Admin Access
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (stage === 'quiz') {
    const question = selectedQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="text-sm">
                  Question {currentQuestion + 1} of {selectedQuestions.length}
                </Badge>
                <Badge variant="secondary">{question.domain}</Badge>
              </div>
              <div className="flex items-center space-x-2 text-lg font-mono">
                <Clock className="w-5 h-5" />
                <span className={timeLeft < 300 ? 'text-red-600' : 'text-gray-700'}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg leading-relaxed">
                {question.question}
              </CardTitle>
              {question.type === 'multiple_select' && (
                <p className="text-sm text-blue-600">Select all that apply</p>
              )}
            </CardHeader>
            <CardContent className="space-y-3">
              {question.type === 'fill_in_blank' ? (
                <Input
                  value={answers[currentQuestion] as string || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  className="text-lg p-4"
                />
              ) : (
                <div className="space-y-2">
                  {question.options?.map((option, index) => (
                    <label
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type={question.type === 'multiple_select' ? 'checkbox' : 'radio'}
                        name={`question-${currentQuestion}`}
                        checked={
                          question.type === 'multiple_select'
                            ? Array.isArray(answers[currentQuestion]) && 
                              (answers[currentQuestion] as string[]).includes(option.charAt(0))
                            : answers[currentQuestion] === option.charAt(0)
                        }
                        onChange={(e) => {
                          if (question.type === 'multiple_select') {
                            const currentAnswers = Array.isArray(answers[currentQuestion])
                              ? answers[currentQuestion] as string[]
                              : [];
                            const optionLetter = option.charAt(0);
                            
                            if (e.target.checked) {
                              handleAnswer([...currentAnswers, optionLetter]);
                            } else {
                              handleAnswer(currentAnswers.filter(a => a !== optionLetter));
                            }
                          } else {
                            handleAnswer(option.charAt(0));
                          }
                        }}
                        className="mt-1"
                      />
                      <span className="text-sm leading-relaxed">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              Previous
            </Button>
            <div className="space-x-2">
              {currentQuestion === selectedQuestions.length - 1 ? (
                <Button onClick={submitQuiz} size="lg">
                  Submit Quiz
                </Button>
              ) : (
                <Button onClick={nextQuestion} size="lg">
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'results' && results) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="w-16 h-16 text-yellow-500" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                Quiz Completed!
              </CardTitle>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{results.score}/{selectedQuestions.length}</p>
                  <p className="text-sm text-gray-600">Score</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{results.percentage}%</p>
                  <p className="text-sm text-gray-600">Percentage</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{formatTime(results.timeSpent)}</p>
                  <p className="text-sm text-gray-600">Time Taken</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results.questionDetails.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      result.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {result.isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold">Q{index + 1}</span>
                          <Badge variant="outline" className="text-xs">{result.domain}</Badge>
                        </div>
                        <p className="text-sm mb-2">{result.question}</p>
                        <div className="text-xs space-y-1">
                          <p>
                            <span className="font-medium">Your answer:</span>{' '}
                            {Array.isArray(result.userAnswer) 
                              ? result.userAnswer.join(', ') || 'Not answered'
                              : result.userAnswer || 'Not answered'}
                          </p>
                          <p>
                            <span className="font-medium">Correct answer:</span>{' '}
                            {Array.isArray(result.correctAnswer)
                              ? result.correctAnswer.join(', ')
                              : result.correctAnswer}
                          </p>
                          <p className="text-gray-600">{result.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <Button onClick={restartQuiz} size="lg">
              Take Quiz Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}