'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, XCircle, Trophy, ArrowLeft, Flag, FlagOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Question, QuestionResult } from '@/lib/types';

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | string[] | null)[]>([]);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
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
          timeRemaining,
          flaggedQuestions: Array.from(flaggedQuestions)
        });
      }, 5000);
      return () => clearInterval(autoSave);
    }
  }, [stage, currentQuestionIndex, answers, timeRemaining, flaggedQuestions, updateLocalStorage]);

  const loadQuizState = async () => {
    try {
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
          console.log('Resuming session from localStorage:', session);
          setQuestions(session.questions);
          setCurrentQuestionIndex(session.currentQuestionIndex);
          setAnswers(session.answers);
          setTimeRemaining(session.timeRemaining);
          setSessionToken(session.sessionId);
          setStartTime(new Date(session.startTime));
          setHasActiveSession(true);
          setStage('quiz');
          
          // Load flagged questions from session
          if (session.flaggedQuestions) {
            setFlaggedQuestions(new Set(session.flaggedQuestions));
          }
        } else {
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
    updateLocalStorage({ answers: newAnswers });
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    updateLocalStorage({ currentQuestionIndex: index });
  };

  const toggleFlag = (questionIndex: number) => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(questionIndex)) {
      newFlagged.delete(questionIndex);
    } else {
      newFlagged.add(questionIndex);
    }
    setFlaggedQuestions(newFlagged);
    updateLocalStorage({ flaggedQuestions: Array.from(newFlagged) });
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
      
      const getFullAnswer = (letterAnswer: string | string[]): string | string[] => {
        if (Array.isArray(letterAnswer)) {
          return letterAnswer.map(letter => {
            const optionIndex = letter.charCodeAt(0) - 65;
            return question.options?.[optionIndex] || letter;
          });
        } else {
          const optionIndex = letterAnswer.charCodeAt(0) - 65;
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
        correctAnswer: correctFullAnswer,
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

  const getQuestionStatus = (index: number) => {
    const isAnswered = answers[index] !== null && answers[index] !== undefined && answers[index] !== '';
    const isCurrent = index === currentQuestionIndex;
    const isFlagged = flaggedQuestions.has(index);

    if (isCurrent) return 'current';
    if (isFlagged) return 'flagged';
    if (isAnswered) return 'answered';
    return 'unanswered';
  };

  const getQuestionStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-blue-500 text-white border-blue-600';
      case 'answered':
        return 'bg-green-500 text-white border-green-600';
      case 'flagged':
        return 'bg-orange-500 text-white border-orange-600';
      case 'unanswered':
        return 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-200 border-t-indigo-600 mx-auto"></div>
          <p className="mt-4 text-base text-gray-600 font-medium">Loading your quiz...</p>
        </div>
      </div>
    );
  }

  if (stage === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-3 sm:p-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-t-lg p-4 sm:p-6">
              <div className="flex justify-center mb-3">
                <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-300" />
              </div>
              <CardTitle className="text-2xl sm:text-4xl mb-2">Quiz Complete!</CardTitle>
              <p className="text-lg sm:text-xl opacity-90">
                You scored {results.score} out of {results.totalQuestions} ({results.percentage}%)
              </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-base text-blue-800 mb-1">Score</h3>
                  <p className="text-2xl font-bold text-blue-900">{results.percentage}%</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl border border-green-200">
                  <h3 className="font-bold text-base text-green-800 mb-1">Correct</h3>
                  <p className="text-2xl font-bold text-green-900">{results.score}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-base text-purple-800 mb-1">Time</h3>
                  <p className="text-2xl font-bold text-purple-900">{formatTime(results.totalTime)}</p>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  onClick={backToDashboard} 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 text-base w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = answers.filter(answer => answer !== null && answer !== undefined && answer !== '').length;
  const flaggedCount = flaggedQuestions.size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto p-3 sm:p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
          <Button 
            onClick={backToDashboard} 
            variant="outline" 
            size="sm"
            className="bg-white/80 backdrop-blur-sm border-gray-300 hover:bg-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="text-center">
              <div className="text-xs sm:text-sm font-medium text-gray-600">Progress</div>
              <div className="text-sm sm:text-base font-bold text-gray-800">{answeredCount}/{questions.length}</div>
            </div>
            <div className="text-center">
              <div className="text-xs sm:text-sm font-medium text-gray-600">Flagged</div>
              <div className="text-sm sm:text-base font-bold text-orange-600">{flaggedCount}</div>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base font-semibold bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-200">
              <Clock className={`w-4 h-4 ${timeRemaining < 300 ? 'text-red-500' : 'text-blue-500'}`} />
              <span className={timeRemaining < 300 ? 'text-red-500' : 'text-gray-700'}>
                {formatTime(timeRemaining)}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Question Navigation Panel - Hidden on mobile, collapsible on tablet */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="sticky top-4 shadow-md border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg font-bold text-gray-800">Navigation</CardTitle>
                <div className="text-xs sm:text-sm text-gray-600">
                  Tap to jump to question
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-6 sm:grid-cols-5 gap-1.5 sm:gap-2">
                  {questions.map((_, index) => {
                    const status = getQuestionStatus(index);
                    const colorClass = getQuestionStatusColor(status);
                    
                    return (
                      <button
                        key={index}
                        onClick={() => goToQuestion(index)}
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 border-2 ${colorClass} transform hover:scale-105`}
                        title={`Question ${index + 1} - ${status}`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
                
                {/* Legend */}
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded bg-blue-500"></div>
                    <span>Current</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded bg-green-500"></div>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded bg-orange-500"></div>
                    <span>Flagged</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded bg-gray-200"></div>
                    <span>Unanswered</span>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>Answered: {answeredCount}/{questions.length}</div>
                    <div>Remaining: {questions.length - answeredCount}</div>
                    <div>Flagged: {flaggedCount}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Question Counter and Flag */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="bg-white/80 backdrop-blur-sm px-2 py-1 text-xs sm:text-sm">
                  Q{currentQuestionIndex + 1}/{questions.length}
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                  {currentQuestion?.domain}
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                  {currentQuestion?.type === 'multiple_select' ? 'Multi' : 'Single'}
                </Badge>
              </div>
              
              <Button
                onClick={() => toggleFlag(currentQuestionIndex)}
                variant="outline"
                size="sm"
                className={`${
                  flaggedQuestions.has(currentQuestionIndex)
                    ? 'bg-orange-50 text-orange-700 border-orange-300 hover:bg-orange-100'
                    : 'bg-white/80 hover:bg-gray-50'
                }`}
              >
                {flaggedQuestions.has(currentQuestionIndex) ? (
                  <Flag className="w-4 h-4 mr-1 fill-current" />
                ) : (
                  <FlagOff className="w-4 h-4 mr-1" />
                )}
                <span className="hidden sm:inline">
                  {flaggedQuestions.has(currentQuestionIndex) ? 'Flagged' : 'Flag'}
                </span>
              </Button>
            </div>

            {/* Question Card */}
            <Card className="mb-4 shadow-md border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                <h2 
                  className="text-lg sm:text-xl font-bold text-gray-800 mb-4 leading-relaxed" 
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
                        className={`flex items-start p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          isSelected 
                            ? 'border-indigo-400 bg-indigo-50 shadow-sm' 
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
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
                          className="mr-3 mt-1 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                        />
                        <span 
                          className="text-sm sm:text-base text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: option }} 
                        />
                      </label>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <Button 
                onClick={prevQuestion} 
                disabled={currentQuestionIndex === 0}
                variant="outline"
                className="bg-white/80 hover:bg-white px-4 py-2 w-full sm:w-auto"
              >
                Previous
              </Button>
              
              <div className="text-center text-xs sm:text-sm text-gray-600 px-2">
                {currentQuestionIndex === questions.length - 1 ? (
                  <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full border border-yellow-200">
                    Ready to Submit?
                  </span>
                ) : (
                  <span className="hidden sm:inline">
                    {questions.length - currentQuestionIndex - 1} remaining
                  </span>
                )}
              </div>
              
              <div className="flex space-x-2">
                {currentQuestionIndex === questions.length - 1 ? (
                  <Button 
                    onClick={submitQuiz} 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 shadow-lg w-full sm:w-auto"
                  >
                    Submit Quiz
                  </Button>
                ) : (
                  <Button 
                    onClick={nextQuestion}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2 w-full sm:w-auto"
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}