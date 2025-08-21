'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, FileDown, Trash2, BarChart3, Clock, Trophy, ArrowLeft, Eye, AlertCircle } from 'lucide-react';
import { QuizSubmission } from '@/lib/types';
import { formatTime } from '@/lib/utils';
import Link from 'next/link';

interface WrongAnswer {
  userName: string;
  userAnswer: string | string[] | null;
  explanation: string;
}

interface QuestionStat {
  questionId: number;
  domain: string;
  question: string;
  correctAnswer: string | string[];
  totalAttempts: number;
  correctAttempts: number;
  wrongAnswers: WrongAnswer[];
  successRate: number;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<QuizSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<QuizSubmission | null>(null);
  const [activeTab, setActiveTab] = useState('submissions');

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await fetch('/api/results');
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data);
      }
    } catch (error) {
      console.error('Error fetching results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = async () => {
    if (!confirm('Are you sure you want to clear all results?')) {
      return;
    }

    try {
      const response = await fetch('/api/results', { method: 'DELETE' });
      if (response.ok) {
        setSubmissions([]);
      }
    } catch (error) {
      console.error('Error clearing results:', error);
    }
  };

  const exportResults = () => {
    if (submissions.length === 0) {
      alert('No results to export');
      return;
    }

    const csvContent = [
      ['Name', 'Email', 'Score', 'Total', 'Percentage', 'Time', 'Date'].join(','),
      ...submissions.map(s => [
        `"${s.userName}"`,
        `"${s.userEmail || ''}"`,
        s.score,
        s.questionDetails.length,
        s.percentage,
        s.timeSpent,
        `"${new Date(s.timestamp).toLocaleString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-results-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportDetailedResults = () => {
    if (submissions.length === 0) {
      alert('No results to export');
      return;
    }

    const csvContent = [
      ['Name', 'Email', 'Question ID', 'Domain', 'Question', 'User Answer', 'Correct Answer', 'Is Correct', 'Explanation'].join(','),
      ...submissions.flatMap(s => 
        s.questionDetails.map(q => [
          `"${s.userName}"`,
          `"${s.userEmail || ''}"`,
          q.questionId,
          `"${q.domain}"`,
          `"${q.question.replace(/"/g, '&quot;')}"`,
          `"${Array.isArray(q.userAnswer) ? q.userAnswer.join(', ') : q.userAnswer || 'Not answered'}"`,
          `"${Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}"`,
          q.isCorrect,
          `"${q.explanation.replace(/"/g, '&quot;')}"`
        ].join(','))
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `detailed-quiz-results-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getQuestionAnalytics = (): QuestionStat[] => {
    const questionStats = new Map<string, QuestionStat>();
    
    submissions.forEach(submission => {
      submission.questionDetails.forEach(detail => {
        const key = `${detail.questionId}-${detail.question}`;
        if (!questionStats.has(key)) {
          questionStats.set(key, {
            questionId: detail.questionId,
            domain: detail.domain,
            question: detail.question,
            correctAnswer: detail.correctAnswer,
            totalAttempts: 0,
            correctAttempts: 0,
            wrongAnswers: [],
            successRate: 0
          });
        }
        
        const stat = questionStats.get(key)!;
        stat.totalAttempts++;
        if (detail.isCorrect) {
          stat.correctAttempts++;
        } else {
          stat.wrongAnswers.push({
            userName: submission.userName,
            userAnswer: detail.userAnswer,
            explanation: detail.explanation
          });
        }
      });
    });

    return Array.from(questionStats.values())
      .map(stat => ({
        ...stat,
        successRate: Math.round((stat.correctAttempts / stat.totalAttempts) * 100)
      }))
      .sort((a, b) => a.successRate - b.successRate);
  };

  const stats = {
    totalSubmissions: submissions.length,
    averageScore: submissions.length > 0 
      ? Math.round(submissions.reduce((acc, s) => acc + s.percentage, 0) / submissions.length)
      : 0,
    averageTime: submissions.length > 0
      ? Math.round(submissions.reduce((acc, s) => acc + s.timeSpent, 0) / submissions.length)
      : 0,
    highestScore: submissions.length > 0 
      ? Math.max(...submissions.map(s => s.percentage))
      : 0
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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Quiz Dashboard</h1>
            <p className="text-gray-600">Monitor quiz performance and detailed analytics</p>
          </div>
          <div className="space-x-2">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Quiz
              </Button>
            </Link>
            <Button onClick={exportResults} variant="outline" size="sm">
              <FileDown className="w-4 h-4 mr-2" />
              Export Summary
            </Button>
            <Button onClick={exportDetailedResults} variant="outline" size="sm">
              <FileDown className="w-4 h-4 mr-2" />
              Export Detailed
            </Button>
            <Button onClick={clearResults} variant="destructive" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">{stats.totalSubmissions}</p>
                  <p className="text-sm text-gray-600">Total Submissions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">{stats.averageScore}%</p>
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
                  <p className="text-2xl font-bold">{formatTime(stats.averageTime)}</p>
                  <p className="text-sm text-gray-600">Average Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Trophy className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold">{stats.highestScore}%</p>
                  <p className="text-sm text-gray-600">Highest Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="submissions">All Submissions</TabsTrigger>
            <TabsTrigger value="question-analytics">Question Analytics</TabsTrigger>
            <TabsTrigger value="student-details">Student Details</TabsTrigger>
          </TabsList>

          {/* Submissions Tab */}
          <TabsContent value="submissions">
            <Card>
              <CardHeader>
                <CardTitle>Quiz Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {submissions.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No quiz submissions yet.</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Percentage</TableHead>
                        <TableHead>Time Taken</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submissions.map((submission) => (
                        <TableRow key={submission.id}>
                          <TableCell className="font-medium">{submission.userName}</TableCell>
                          <TableCell>{submission.userEmail || '-'}</TableCell>
                          <TableCell>
                            {submission.score}/{submission.questionDetails.length}
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={submission.percentage >= 70 ? "default" : "secondary"}
                              className={submission.percentage >= 70 ? "bg-green-600" : ""}
                            >
                              {submission.percentage}%
                            </Badge>
                          </TableCell>
                          <TableCell>{formatTime(submission.timeSpent)}</TableCell>
                          <TableCell>
                            {new Date(submission.timestamp).toLocaleString()}
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                setSelectedSubmission(submission);
                                setActiveTab('student-details');
                              }}
                            >
                              <Eye className="w-4 h-4 mr-1" />
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
          </TabsContent>

          {/* Question Analytics Tab */}
          <TabsContent value="question-analytics">
            <Card>
              <CardHeader>
                <CardTitle>Question Performance Analytics</CardTitle>
                <p className="text-sm text-gray-600">Questions sorted by difficulty (lowest success rate first)</p>
              </CardHeader>
              <CardContent>
                {submissions.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No data available for analytics.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {getQuestionAnalytics().map((stat) => (
                      <div key={stat.questionId} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold">Q{stat.questionId}</span>
                              <Badge variant="outline">{stat.domain}</Badge>
                              <Badge 
                                variant={stat.successRate >= 70 ? "default" : "destructive"}
                                className={stat.successRate >= 70 ? "bg-green-600" : ""}
                              >
                                {stat.successRate}% success rate
                              </Badge>
                              {stat.successRate < 50 && (
                                <AlertCircle className="w-4 h-4 text-red-500" />
                              )}
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{stat.question}</p>
                            <p className="text-xs text-gray-500">
                              {stat.correctAttempts} out of {stat.totalAttempts} answered correctly
                            </p>
                            <p className="text-xs text-green-600 mt-1">
                              <strong>Correct answer:</strong> {Array.isArray(stat.correctAnswer) ? stat.correctAnswer.join(', ') : stat.correctAnswer}
                            </p>
                          </div>
                        </div>
                        
                        {stat.wrongAnswers.length > 0 && (
                          <details className="mt-3">
                            <summary className="text-sm font-medium cursor-pointer text-red-600 hover:text-red-800">
                              View incorrect answers ({stat.wrongAnswers.length})
                            </summary>
                            <div className="mt-2 space-y-2">
                              {stat.wrongAnswers.map((wrong: WrongAnswer, idx: number) => (
                                <div key={idx} className="text-xs bg-red-50 p-2 rounded border-l-2 border-red-200">
                                  <p><strong>{wrong.userName}:</strong> {
                                    Array.isArray(wrong.userAnswer) 
                                      ? wrong.userAnswer.join(', ') || 'Not answered'
                                      : wrong.userAnswer || 'Not answered'
                                  }</p>
                                </div>
                              ))}
                            </div>
                          </details>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Student Details Tab */}
          <TabsContent value="student-details">
            <Card>
              <CardHeader>
                <CardTitle>Individual Student Performance</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedSubmission ? (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{selectedSubmission.userName}</h3>
                        <p className="text-sm text-gray-600">{selectedSubmission.userEmail || 'No email provided'}</p>
                        <p className="text-sm text-gray-600">
                          Submitted: {new Date(selectedSubmission.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">
                          {selectedSubmission.score}/{selectedSubmission.questionDetails.length}
                        </p>
                        <p className="text-sm text-gray-600">{selectedSubmission.percentage}% ({formatTime(selectedSubmission.timeSpent)})</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {selectedSubmission.questionDetails.map((detail, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg border-l-4 ${
                            detail.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            {detail.isCorrect ? (
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            ) : (
                              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white text-xs">✗</span>
                              </div>
                            )}
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-semibold text-sm">Q{detail.questionId}</span>
                                <Badge variant="outline" className="text-xs">{detail.domain}</Badge>
                              </div>
                              <p className="text-sm mb-2">{detail.question}</p>
                              <div className="text-xs space-y-1">
                                <p>
                                  <span className="font-medium">Student answer:</span>{' '}
                                  <span className={detail.isCorrect ? 'text-green-700' : 'text-red-700'}>
                                    {Array.isArray(detail.userAnswer) 
                                      ? detail.userAnswer.join(', ') || 'Not answered'
                                      : detail.userAnswer || 'Not answered'}
                                  </span>
                                </p>
                                <p>
                                  <span className="font-medium">Correct answer:</span>{' '}
                                  <span className="text-green-700">
                                    {Array.isArray(detail.correctAnswer)
                                      ? detail.correctAnswer.join(', ')
                                      : detail.correctAnswer}
                                  </span>
                                </p>
                                <p className="text-gray-600 mt-1">{detail.explanation}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSelectedSubmission(null);
                        setActiveTab('submissions');
                      }}
                    >
                      Back to List
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Select a student from the All Submissions tab to view detailed results.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}