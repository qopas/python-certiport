'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { User, BookOpen, Clock, Trophy, Play, RotateCcw, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { XCircle } from "lucide-react";

interface UserInfo {
  id: number;
  email: string;
  full_name: string;
  class_name?: string;
}

interface QuizAttempt {
  id: number;
  score: number;
  total_questions: number;
  percentage: number;
  total_time: number;
  completed_at: string;
}

interface ActiveSession {
  id: number;
  current_question_index: number;
  total_questions: number;
  time_remaining: number;
  started_at: string;
}

export default function UserDashboard() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [quizHistory, setQuizHistory] = useState<QuizAttempt[]>([]);
  const [activeSession, setActiveSession] = useState<ActiveSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewQuizConfirm, setShowNewQuizConfirm] = useState(false);
  const [selectedQuizDetails, setSelectedQuizDetails] = useState<any>(null);
  const [showQuizDetailsModal, setShowQuizDetailsModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      console.log('Fetching dashboard data...');
      
      const [userResponse, historyResponse] = await Promise.all([
        fetch('/api/user/profile'),
        fetch('/api/user/quiz-history')
      ]);

      if (userResponse.ok) {
        const userData = await userResponse.json();
        console.log('User data:', userData);
        setUserInfo(userData);
        
        // Check localStorage for active session
        if (typeof window !== 'undefined') {
          const QuizStorage = (await import('@/lib/quiz-storage')).default;
          const sessionSummary = QuizStorage.getSessionSummary(userData.id);
          
          console.log('LocalStorage session summary:', sessionSummary);
          
          if (sessionSummary.hasSession) {
            setActiveSession({
              id: 1, // Dummy ID for localStorage sessions
              current_question_index: (sessionSummary.currentQuestion || 1) - 1,
              total_questions: sessionSummary.totalQuestions || 0,
              time_remaining: sessionSummary.timeRemaining || 0,
              started_at: sessionSummary.startedAt || new Date().toISOString()
            });
          } else {
            setActiveSession(null);
          }
        }
      }

      if (historyResponse.ok) {
        const historyData = await historyResponse.json();
        console.log('History data:', historyData);
        setQuizHistory(historyData);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const startNewQuiz = async () => {
    try {
      const response = await fetch('/api/quiz/start', { method: 'POST' });
      
      if (!response.ok) {
        console.error('Quiz start failed:', response.status, response.statusText);
        return;
      }
      
      const data = await response.json();
      console.log('Quiz start response:', data);
      
      if (!data.success) {
        console.error('API returned error:', data.error);
        return;
      }
      
      if (!data.questions || !Array.isArray(data.questions)) {
        console.error('Invalid questions data:', data.questions);
        return;
      }
      
      // Clear any existing localStorage session and save new one
      if (typeof window !== 'undefined') {
        const QuizStorage = (await import('@/lib/quiz-storage')).default;
        QuizStorage.clearSession();
        
        QuizStorage.saveSession({
          userId: data.userId,
          sessionId: data.sessionId,
          questions: data.questions,
          currentQuestionIndex: 0,
          answers: new Array(data.questions.length).fill(null),
          timeRemaining: data.timeLimit,
          startTime: new Date().toISOString(),
          lastUpdated: new Date().toISOString()
        });
      }
      
      router.push('/quiz');
    } catch (error) {
      console.error('Error starting quiz:', error);
    }
  };

  const confirmStartNewQuiz = async () => {
    setShowNewQuizConfirm(false);
    
    // Clear localStorage session before starting new one
    if (typeof window !== 'undefined') {
      const QuizStorage = (await import('@/lib/quiz-storage')).default;
      QuizStorage.clearSession();
    }
    
    await startNewQuiz();
  };

  const resumeQuiz = () => {
    router.push('/quiz');
  };

  const logout = async () => {
    try {
      await fetch('/api/auth', { method: 'DELETE' });
      router.push('/login');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const viewQuizDetails = async (quizId: number) => {
    try {
      const response = await fetch(`/api/quiz/details/${quizId}`);
      if (response.ok) {
        const details = await response.json();
        setSelectedQuizDetails(details);
        setShowQuizDetailsModal(true);
      } else {
        console.error('Failed to fetch quiz details');
      }
    } catch (error) {
      console.error('Error fetching quiz details:', error);
    }
  };

  const closeQuizDetailsModal = () => {
    setShowQuizDetailsModal(false);
    setSelectedQuizDetails(null);
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-600';
    if (percentage >= 60) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome, {userInfo?.full_name}!
            </h1>
            <p className="text-gray-600">
              {userInfo?.class_name && `Class: ${userInfo.class_name}`}
            </p>
          </div>
          <div className="flex space-x-2">
            <Button onClick={fetchDashboardData} variant="outline" size="sm">
              Refresh
            </Button>
            <Button onClick={logout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">{quizHistory.length}</p>
                  <p className="text-sm text-gray-600">Quizzes Taken</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Trophy className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold">
                    {quizHistory.length > 0 
                      ? Math.round(quizHistory.reduce((acc, q) => acc + q.percentage, 0) / quizHistory.length)
                      : 0}%
                  </p>
                  <p className="text-sm text-gray-600">Average Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold">
                    {quizHistory.length > 0 
                      ? formatTime(Math.round(quizHistory.reduce((acc, q) => acc + q.total_time, 0) / quizHistory.length))
                      : '0:00'}
                  </p>
                  <p className="text-sm text-gray-600">Avg Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Trophy className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">
                    {quizHistory.length > 0 ? Math.max(...quizHistory.map(q => q.percentage)) : 0}%
                  </p>
                  <p className="text-sm text-gray-600">Best Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quiz Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {activeSession ? (
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800">Resume Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-orange-700">
                    Progress: {(activeSession?.current_question_index ?? 0) + 1} of {activeSession?.total_questions} questions
                  </p>
                  <p className="text-sm text-orange-700">
                    Time remaining: {formatTime(activeSession.time_remaining)}
                  </p>
                  <p className="text-sm text-orange-700">
                    Started: {new Date(activeSession.started_at).toLocaleString()}
                  </p>
                </div>
                <div className="space-y-3">
                  <Button onClick={resumeQuiz} className="w-full bg-orange-600 hover:bg-orange-700">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Resume Quiz
                  </Button>
                  <Button 
                    onClick={() => setShowNewQuizConfirm(true)} 
                    variant="outline"
                    className="w-full border-red-300 text-red-700 hover:bg-red-50"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start New Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Start New Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Take a new Python quiz with 42 randomly selected questions.
                </p>
                <Button onClick={startNewQuiz} className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          )}

        {/* Quiz Details Modal */}
       {showQuizDetailsModal && selectedQuizDetails && (
  <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Quiz Results Details</h2>
            <p className="text-gray-600">
              Taken on {new Date(selectedQuizDetails.completed_at).toLocaleString()}
            </p>
          </div>
          <Button onClick={closeQuizDetailsModal} variant="outline" size="sm">
            ✕
          </Button>
        </div>
        
        {/* Quiz Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="text-center p-3 bg-blue-50 rounded">
            <p className="text-lg font-bold text-blue-800">{selectedQuizDetails.score}</p>
            <p className="text-sm text-blue-600">Correct</p>
          </div>
          <div className="text-center p-3 bg-red-50 rounded">
            <p className="text-lg font-bold text-red-800">
              {selectedQuizDetails.total_questions - selectedQuizDetails.score}
            </p>
            <p className="text-sm text-red-600">Incorrect</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded">
            <p className="text-lg font-bold text-green-800">{selectedQuizDetails.percentage}%</p>
            <p className="text-sm text-green-600">Score</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded">
            <p className="text-lg font-bold text-purple-800">{formatTime(selectedQuizDetails.total_time)}</p>
            <p className="text-sm text-purple-600">Time</p>
          </div>
        </div>
      </div>
      
      {/* Questions List */}
      <div className="p-6 overflow-y-auto max-h-[60vh]">
        <h3 className="text-lg font-semibold mb-4">
          Questions You Got Wrong ({selectedQuizDetails.questionDetails?.filter((q: any) => !q.isCorrect).length || 0})
        </h3>
        
        {selectedQuizDetails.questionDetails?.filter((q: any) => !q.isCorrect).length === 0 ? (
          <div className="text-center py-8">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-green-600">Perfect Score!</p>
            <p className="text-gray-600">You got all questions correct!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {selectedQuizDetails.questionDetails
              ?.filter((q: any) => !q.isCorrect)
              .map((question: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="mb-2">{question.domain}</Badge>
                      <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <div 
                      className="text-base font-medium"
                      dangerouslySetInnerHTML={{ __html: question.question }}
                    />
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 border border-red-200 rounded">
                        <p className="text-sm font-medium text-red-800">Your Answer:</p>
                        {question.userAnswer ? (
                          Array.isArray(question.userAnswer) ? (
                            <div className="text-red-700">
                              {question.userAnswer.map((answer: string, idx: number) => (
                                <div key={idx} dangerouslySetInnerHTML={{ __html: answer }} />
                              ))}
                            </div>
                          ) : (
                            <div 
                              className="text-red-700"
                              dangerouslySetInnerHTML={{ __html: question.userAnswer }}
                            />
                          )
                        ) : (
                          <p className="text-red-700">No answer selected</p>
                        )}
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded">
                        <p className="text-sm font-medium text-green-800">Correct Answer:</p>
                        {Array.isArray(question.correctAnswer) ? (
                          <div className="text-green-700">
                            {question.correctAnswer.map((answer: string, idx: number) => (
                              <div key={idx} dangerouslySetInnerHTML={{ __html: answer }} />
                            ))}
                          </div>
                        ) : (
                          <div 
                            className="text-green-700"
                            dangerouslySetInnerHTML={{ __html: question.correctAnswer }}
                          />
                        )}
                      </div>
                      {question.explanation && (
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                          <p className="text-sm font-medium text-blue-800">Explanation:</p>
                          <div 
                            className="text-blue-700"
                            dangerouslySetInnerHTML={{ __html: question.explanation }}
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}
      </div>
    </div>
  </div>
)}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{userInfo?.full_name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Email:</span>
                  <span className="text-sm">{userInfo?.email}</span>
                </div>
                {userInfo?.class_name && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Class:</span>
                    <Badge variant="outline">{userInfo.class_name}</Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Confirmation Modal for New Quiz */}
        {showNewQuizConfirm && (
          <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-red-800">Confirm New Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Are you sure you want to start a new quiz? This will permanently delete your current progress:
                </p>
                <div className="bg-gray-50 p-3 rounded mb-4">
                  <p className="text-sm text-gray-600">
                    Current Progress: {(activeSession?.current_question_index ?? 0) + 1} of {activeSession?.total_questions} questions
                  </p>
                  <p className="text-sm text-gray-600">
                    Time Remaining: {activeSession && formatTime(activeSession.time_remaining)}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Button 
                    onClick={() => setShowNewQuizConfirm(false)} 
                    variant="outline" 
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={confirmStartNewQuiz} 
                    className="flex-1 bg-red-600 hover:bg-red-700"
                  >
                    Yes, Start New Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quiz History */}
        <Card>
          <CardHeader>
            <CardTitle>Quiz History</CardTitle>
          </CardHeader>
          <CardContent>
            {quizHistory.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No quizzes taken yet. Start your first quiz!</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Percentage</TableHead>
                    <TableHead>Time Taken</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quizHistory.map((attempt) => (
                    <TableRow key={attempt.id}>
                      <TableCell>
                        {new Date(attempt.completed_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {attempt.score}/{attempt.total_questions}
                      </TableCell>
                      <TableCell>
                        <Badge className={getScoreColor(attempt.percentage)}>
                          {attempt.percentage}%
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {formatTime(attempt.total_time)}
                      </TableCell>
                      <TableCell>
                        <Button 
                          onClick={() => viewQuizDetails(attempt.id)}
                          variant="outline" 
                          size="sm"
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}