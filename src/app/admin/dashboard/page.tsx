'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Users, FileDown, Trash2, BarChart3, Clock, Trophy, ArrowLeft } from 'lucide-react';
import { QuizSubmission } from '@/lib/types';
import { formatTime } from '@/lib/utils';
import Link from 'next/link';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<QuizSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
            <p className="text-gray-600">Monitor quiz performance and results</p>
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
              Export CSV
            </Button>
            <Button onClick={clearResults} variant="destructive" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

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