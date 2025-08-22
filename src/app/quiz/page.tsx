'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, XCircle, Trophy, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Question, QuestionResult } from '@/lib/types';

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | string[] | null)[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [sessionToken, setSessionToken] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasActiveSession, setHasActiveSession] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [stage, setStage] = useState<'loading' | 'quiz' | 'results'>('loading');
  const [results, setResults] = useState<any>(null);
  const router = useRouter();

  // Helper function to update localStorage - DEFINED EARLY with useCallback
  const updateLocalStorage = useCallback(async (updates: any) => {
    if (typeof window !== 'undefined') {
      try {
        const QuizStorage = (await import('@/lib/quiz-storage')).default;
        QuizStorage.updateSession(updates);
      } catch (error) {
        console.error('Failed to update localStorage:', error);
      }
    }
  }, []);

  // Load quiz state on component mount
  useEffect(() => {
    loadQuizState();
  }, []);

  // Timer effect
  useEffect(() => {
    if (stage === 'quiz' && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            submitQuiz();
            return 0;
          }
          // Update localStorage with new time
          updateLocalStorage({ timeRemaining: newTime });
          return newTime;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [stage, timeRemaining, updateLocalStorage]);

  // Auto-save progress to localStorage every 5 seconds
  useEffect(() => {
    if (stage === 'quiz') {
      const autoSave = setInterval(() => {
        updateLocalStorage({
          currentQuestionIndex,
          answers,
          timeRemaining
        });
      }, 5000);
      return () => clearInterval(autoSave);
    }
  }, [stage, currentQuestionIndex, answers, timeRemaining, updateLocalStorage]);

  const loadQuizState = async () => {
    try {
      // First get user info
      const userResponse = await fetch('/api/user/profile');
      if (!userResponse.ok) {
        router.push('/dashboard');
        return;
      }
      
      const userData = await userResponse.json();
      
      if (typeof window !== 'undefined') {
        const QuizStorage = (await import('@/lib/quiz-storage')).default;
        const session = QuizStorage.loadSession(userData.id);

        if (session) {
          // Resume existing session
          console.log('Resuming session from localStorage:', session);
          setQuestions(session.questions);
          setCurrentQuestionIndex(session.currentQuestionIndex);
          setAnswers(session.answers);
          setTimeRemaining(session.timeRemaining);
          setSessionToken(session.sessionId);
          setStartTime(new Date(session.startTime));
          setHasActiveSession(true);
          setStage('quiz');
        } else {
          // No session found, redirect to dashboard
          console.log('No session found, redirecting to dashboard');
          router.push('/dashboard');
        }
      }
    } catch (error) {
      console.error('Error loading quiz state:', error);
      router.push('/dashboard');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (answer: string | string[]) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
    
    // Update localStorage immediately
    updateLocalStorage({ answers: newAnswers });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);
      updateLocalStorage({ currentQuestionIndex: newIndex });
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      const newIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(newIndex);
      updateLocalStorage({ currentQuestionIndex: newIndex });
    }
  };

const submitQuiz = async () => {
  if (!startTime) return;

  const endTime = new Date();
  const totalTime = Math.round((endTime.getTime() - startTime.getTime()) / 1000);
  
  let score = 0;
  const questionDetails: QuestionResult[] = questions.map((question, index) => {
    const userAnswer = answers[index];
    
    // Convert letter answer to full option text
    const getFullAnswer = (letterAnswer: string | string[]): string | string[] => {
      if (Array.isArray(letterAnswer)) {
        // Multiple select - convert each letter to full option
        return letterAnswer.map(letter => {
          const optionIndex = letter.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
          return question.options?.[optionIndex] || letter;
        });
      } else {
        // Single select - convert letter to full option
        const optionIndex = letterAnswer.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
        return question.options?.[optionIndex] || letterAnswer;
      }
    };
    
    const correctFullAnswer = getFullAnswer(question.answer);
    
    const isCorrect = Array.isArray(correctFullAnswer) 
      ? Array.isArray(userAnswer) && 
        correctFullAnswer.length === userAnswer.length && 
        correctFullAnswer.every(ans => userAnswer.includes(ans))
      : userAnswer === correctFullAnswer;
    
    if (isCorrect) score++;

    return {
      questionId: question.id,
      domain: question.domain,
      question: question.question,
      userAnswer,
      correctAnswer: correctFullAnswer, // Store full answer text
      isCorrect,
      explanation: question.explanation
    };
  });

  const percentage = Math.round((score / questions.length) * 100);

    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          score,
          percentage,
          totalTime,
          startedAt: startTime.toISOString(),
          questionDetails
        })
        
      });
      if (response.ok && typeof window !== 'undefined') {
       const QuizStorage = (await import('@/lib/quiz-storage')).default;
        QuizStorage.clearSession();
        console.log('Quiz submitted and localStorage cleared');
      }

      const submissionData = {
        score,
        percentage,
        totalTime,
        questionDetails,
        totalQuestions: questions.length
      };

      setResults(submissionData);
      setStage('results');
    } catch (error) {
      console.error('Error submitting quiz:', error);
      // Still show results even if submission failed, but don't clear localStorage
      setResults({
        score,
        percentage,
        totalTime,
        questionDetails,
        totalQuestions: questions.length
      });
      setStage('results');
      
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const backToDashboard = () => {
    router.push('/dashboard');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (stage === 'results') {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="w-16 h-16 text-yellow-500" />
              </div>
              <CardTitle className="text-3xl mb-2">Quiz Complete!</CardTitle>
              <p className="text-xl text-gray-600">
                You scored {results.score} out of {results.totalQuestions} ({results.percentage}%)
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Score</h3>
                  <p className="text-2xl font-bold text-blue-900">{results.percentage}%</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800">Correct</h3>
                  <p className="text-2xl font-bold text-green-900">{results.score}</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800">Time</h3>
                  <p className="text-2xl font-bold text-purple-900">{formatTime(results.totalTime)}</p>
                </div>
              </div>
              <Button onClick={backToDashboard} className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button onClick={backToDashboard} variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              Auto-saving to localStorage
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-lg font-semibold">
              <Clock className="w-5 h-5 text-red-500" />
              <span className={timeRemaining < 300 ? 'text-red-500' : 'text-gray-700'}>
                {formatTime(timeRemaining)}
              </span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline">{currentQuestion?.domain}</Badge>
              <span className="text-sm text-gray-500">
                {currentQuestion?.type === 'multiple_select' ? 'Multiple Select' : 'Single Select'}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <h2 
              className="text-xl font-semibold mb-4" 
              dangerouslySetInnerHTML={{ __html: currentQuestion?.question || '' }}
            />
            
            <div className="space-y-3">
              {currentQuestion?.options?.map((option, index) => {
                const isSelected = currentQuestion.type === 'multiple_select'
                  ? Array.isArray(answers[currentQuestionIndex]) && 
                    (answers[currentQuestionIndex] as string[]).includes(option)
                  : answers[currentQuestionIndex] === option;

                return (
                  <label
                    key={index}
                    className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type={currentQuestion.type === 'multiple_select' ? 'checkbox' : 'radio'}
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      checked={isSelected}
                      onChange={(e) => {
                        if (currentQuestion.type === 'multiple_select') {
                          const currentAnswers = (answers[currentQuestionIndex] as string[]) || [];
                          if (e.target.checked) {
                            handleAnswer([...currentAnswers, option]);
                          } else {
                            handleAnswer(currentAnswers.filter(a => a !== option));
                          }
                        } else {
                          handleAnswer(option);
                        }
                      }}
                      className="mr-3"
                    />
                    <span dangerouslySetInnerHTML={{ __html: option }} />
                  </label>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            onClick={prevQuestion} 
            disabled={currentQuestionIndex === 0}
            variant="outline"
          >
            Previous
          </Button>
          
          <div className="flex space-x-2">
            {currentQuestionIndex === questions.length - 1 ? (
              <Button onClick={submitQuiz} className="bg-green-600 hover:bg-green-700">
                Submit Quiz
              </Button>
            ) : (
              <Button onClick={nextQuestion}>
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}