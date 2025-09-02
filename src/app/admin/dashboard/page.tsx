'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {quizQuestions} from '@/lib/questions'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  FileDown, 
  Trash2, 
  BarChart3, 
  Clock, 
  Trophy, 
  ArrowLeft, 
  Eye, 
  Plus,
  Edit,
  UserPlus,
  Search,
  Key,
  Circle
} from 'lucide-react';

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

// Updated QuizSubmission interface to include both classId and className
interface QuizSubmission {
  id: number;
  userName: string;
  userEmail?: string;
  score: number;
  percentage: number;
  timeSpent: number;
  timestamp: string;
  questionDetails: any[];
  classId: number;      // The class ID for filtering
  className: string;    // The class name for display
}

interface User {
  id: number;
  email: string;
  full_name: string;
  class_id: number;
  class_name: string;
  is_active: boolean;
  created_at: string;
  last_login: string;
  user_count?: number;
}

interface Class {
  id: number;
  name: string;
  description: string;
  user_count: number;
  created_at: string;
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  if (hours > 0) {
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  }
  return `${minutes}m ${remainingSeconds}s`;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<QuizSubmission[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<QuizSubmission | null>(null);
  const [activeTab, setActiveTab] = useState('submissions');
  
  // Filtering state for quiz results
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('all');
  const [submissionsSearchTerm, setSubmissionsSearchTerm] = useState('');
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('all');

  // Class management state
  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [showEditClassModal, setShowEditClassModal] = useState(false);
  const [selectedClassForEdit, setSelectedClassForEdit] = useState<Class | null>(null);
  const [allStudents, setAllStudents] = useState<User[]>([]);
  const [selectedStudentIds, setSelectedStudentIds] = useState<number[]>([]);
  const [studentSearchTerm, setStudentSearchTerm] = useState('');
  const [isLoadingStudents, setIsLoadingStudents] = useState(false);

  // New user form state
  const [newUser, setNewUser] = useState({
    email: '',
    fullName: '',
    classId: '',
    password: ''
  });

  // Edit user form state
  const [editUser, setEditUser] = useState({
    email: '',
    fullName: '',
    classId: '',
    isActive: true,
    newPassword: ''
  });

  // Class form state
  const [newClass, setNewClass] = useState({
    name: '',
    description: ''
  });

  const [editClass, setEditClass] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    fetchResults();
    fetchUsers();
    fetchClasses();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await fetch('/api/results');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSubmissions(data);
      }
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await fetch('/api/admin/classes');
      if (response.ok) {
        const data = await response.json();
        setClasses(data);
      }
    } catch (error) {
      console.error('Error fetching classes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newUser.email,
          fullName: newUser.fullName,
          classId: parseInt(newUser.classId),
          password: newUser.password || undefined
        })
      });

      if (response.ok) {
        const result = await response.json();
        setShowAddUserModal(false);
        setNewUser({ email: '', fullName: '', classId: '', password: '' });
        fetchUsers(); // Refresh user list
        alert(`User created successfully! ${result.defaultPassword ? `Default password: ${result.defaultPassword}` : ''}`);
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user');
    }
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setEditUser({
      email: user.email,
      fullName: user.full_name,
      classId: user.class_id.toString(),
      isActive: user.is_active,
      newPassword: ''
    });
    setShowEditUserModal(true);
  };

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedUser) return;

    try {
      const response = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: selectedUser.id,
          email: editUser.email,
          fullName: editUser.fullName,
          classId: parseInt(editUser.classId),
          isActive: editUser.isActive,
          newPassword: editUser.newPassword || undefined
        })
      });

      if (response.ok) {
        setShowEditUserModal(false);
        setSelectedUser(null);
        setEditUser({ email: '', fullName: '', classId: '', isActive: true, newPassword: '' });
        fetchUsers(); // Refresh user list
        alert('User updated successfully!');
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user');
    }
  };

  const handleDeleteUser = async (userId: number, userName: string) => {
    if (!confirm(`Are you sure you want to permanently delete user "${userName}"? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchUsers(); // Refresh user list
        alert('User deleted successfully!');
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  // Class management functions
  const handleAddClass = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/admin/classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newClass.name,
          description: newClass.description
        })
      });

      if (response.ok) {
        setShowAddClassModal(false);
        setNewClass({ name: '', description: '' });
        fetchClasses(); // Refresh class list
        alert('Class created successfully!');
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error creating class:', error);
      alert('Failed to create class');
    }
  };

  const handleEditClass = async (classItem: Class) => {
    setSelectedClassForEdit(classItem);
    setEditClass({
      name: classItem.name,
      description: classItem.description
    });
    setShowEditClassModal(true);
    
    // Fetch all students and set selected ones
    await fetchAllStudentsForClass(classItem.id);
  };

  const fetchAllStudentsForClass = async (classId: number) => {
    setIsLoadingStudents(true);
    try {
      // Get all students
      const response = await fetch('/api/admin/users');
      if (response.ok) {
        const allUsersData = await response.json();
        const studentsOnly = allUsersData.filter((user: User) => user.email !== 'admin@quiz.com'); // Exclude admin
        setAllStudents(studentsOnly);
        
        // Set currently selected students (those in this class)
        const currentStudents = studentsOnly
          .filter((student: User) => student.class_id === classId)
          .map((student: User) => student.id);
        setSelectedStudentIds(currentStudents);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setIsLoadingStudents(false);
    }
  };

  const handleStudentSelection = (studentId: number) => {
    setSelectedStudentIds(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSaveStudentAssignments = async () => {
    if (!selectedClassForEdit) return;

    try {
      const response = await fetch(`/api/admin/classes/${selectedClassForEdit.id}/assign-students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentIds: selectedStudentIds
        })
      });

      if (response.ok) {
        alert('Student assignments updated successfully!');
        fetchUsers(); // Refresh user list to show updated classes
        fetchClasses(); // Refresh class list to show updated counts
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error saving student assignments:', error);
      alert('Failed to save student assignments');
    }
  };

  // Filter students based on search term
  const filteredStudents = allStudents.filter(student =>
    student.full_name.toLowerCase().includes(studentSearchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(studentSearchTerm.toLowerCase())
  );

  // FIXED: Filter submissions based on class, date, and search using classId
  const filteredSubmissions = submissions.filter(submission => {
    const matchesClass = selectedClassFilter === 'all' || 
      submission.classId?.toString() === selectedClassFilter;
    
    const matchesSearch = submission.userName.toLowerCase().includes(submissionsSearchTerm.toLowerCase()) ||
      (submission.userEmail && submission.userEmail.toLowerCase().includes(submissionsSearchTerm.toLowerCase()));
    
    const matchesDate = (() => {
      if (dateFilter === 'all') return true;
      
      const submissionDate = new Date(submission.timestamp);
      const now = new Date();
      
      switch (dateFilter) {
        case 'today':
          return submissionDate.toDateString() === now.toDateString();
        case 'week':
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return submissionDate >= weekAgo;
        case 'month':
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          return submissionDate >= monthAgo;
        default:
          return true;
      }
    })();
    
    return matchesClass && matchesSearch && matchesDate;
  });

  // FIXED: Calculate class-specific statistics using classId
  const getClassStats = () => {
    const classStatsMap = new Map();
    
    // Initialize stats for all classes
    classes.forEach(cls => {
      classStatsMap.set(cls.id, {
        className: cls.name,
        totalSubmissions: 0,
        averageScore: 0,
        totalStudents: cls.user_count,
        participationRate: 0,
        scores: []
      });
    });

    // Calculate stats from submissions using classId
    filteredSubmissions.forEach(submission => {
      if (submission.classId && classStatsMap.has(submission.classId)) {
        const stats = classStatsMap.get(submission.classId);
        stats.totalSubmissions++;
        stats.scores.push(submission.percentage);
      }
    });

    // Calculate averages and participation rates
    classStatsMap.forEach((stats, classId) => {
      if (stats.scores.length > 0) {
        stats.averageScore = Math.round(stats.scores.reduce((a: number, b: number) => a + b, 0) / stats.scores.length);
        stats.participationRate = stats.totalStudents > 0 
          ? Math.round((stats.totalSubmissions / stats.totalStudents) * 100)
          : 0;
      }
    });

    return Array.from(classStatsMap.values()).filter(stats => stats.totalSubmissions > 0);
  };

  const classStats = getClassStats();

  const handleUpdateClass = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedClassForEdit) return;

    try {
      const response = await fetch('/api/admin/classes', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          classId: selectedClassForEdit.id,
          name: editClass.name,
          description: editClass.description
        })
      });

      if (response.ok) {
        setShowEditClassModal(false);
        setSelectedClassForEdit(null);
        setEditClass({ name: '', description: '' });
        fetchClasses(); // Refresh class list
        alert('Class updated successfully!');
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error updating class:', error);
      alert('Failed to update class');
    }
  };

  const handleDeleteClass = async (classId: number, className: string, userCount: number) => {
    if (userCount > 0) {
      alert(`Cannot delete class "${className}" because it has ${userCount} users assigned. Please move users to another class first.`);
      return;
    }

    if (!confirm(`Are you sure you want to delete class "${className}"? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/classes/${classId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchClasses(); // Refresh class list
        alert('Class deleted successfully!');
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error deleting class:', error);
      alert('Failed to delete class');
    }
  };

  const handleResetPassword = async (userId: number) => {
    if (!confirm('Reset password for this user?')) return;

    try {
      const response = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          newPassword: 'TempPass123'
        })
      });

      if (response.ok) {
        alert('Password reset successfully!');
      } else {
        alert('Failed to reset password');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Failed to reset password');
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || user.class_id.toString() === selectedClass;
    return matchesSearch && matchesClass;
  });

  const clearResults = async () => {
  // Get the selected class name for confirmation dialog
  const selectedClassName = selectedClassFilter === 'all' 
    ? 'all classes' 
    : classes.find(c => c.id.toString() === selectedClassFilter)?.name || 'selected class';
  
  // Create appropriate confirmation message
  const confirmMessage = selectedClassFilter === 'all'
    ? 'Are you sure you want to clear all quiz results from all classes? This action cannot be undone.'
    : `Are you sure you want to clear all quiz results for "${selectedClassName}"? This action cannot be undone.`;
  
  if (!confirm(confirmMessage)) {
    return;
  }

  try {
    const url = selectedClassFilter === 'all' 
      ? '/api/results' 
      : `/api/results?classId=${selectedClassFilter}`;
      
    const response = await fetch(url, { method: 'DELETE' });
    
    if (response.ok) {
      const result = await response.json();
      fetchResults();
      alert(result.message || 'Results cleared successfully!');
    } else {
      const error = await response.json();
      alert(`Error: ${error.error}`);
    }
  } catch (error) {
    console.error('Error clearing results:', error);
    alert('Failed to clear results');
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
  totalSubmissions: filteredSubmissions.length,
  averageScore: (() => {
    if (filteredSubmissions.length === 0) return 0;
    
    const validSubmissions = filteredSubmissions
      .map(s => ({
        ...s,
        percentage: typeof s.percentage === 'string' ? parseFloat(s.percentage) : s.percentage
      }))
      .filter(s => 
        typeof s.percentage === 'number' && 
        !isNaN(s.percentage) && 
        s.percentage !== null
      );
    
    console.log('Valid submissions for average:', validSubmissions.length, 'out of', filteredSubmissions.length);
    console.log('Valid percentages:', validSubmissions.map(s => s.percentage));
    
    return validSubmissions.length > 0
      ? Math.round(validSubmissions.reduce((acc, s) => acc + s.percentage, 0) / validSubmissions.length)
      : 0;
  })(),
  averageTime: (() => {
    if (filteredSubmissions.length === 0) return 0;
    
    const validSubmissions = filteredSubmissions
      .map(s => ({
        ...s,
        timeSpent: typeof s.timeSpent === 'string' ? parseFloat(s.timeSpent) : s.timeSpent
      }))
      .filter(s => 
        typeof s.timeSpent === 'number' && 
        !isNaN(s.timeSpent) && 
        s.timeSpent !== null
      );
    
    return validSubmissions.length > 0
      ? Math.round(validSubmissions.reduce((acc, s) => acc + s.timeSpent, 0) / validSubmissions.length)
      : 0;
  })(),
  highestScore: (() => {
    if (filteredSubmissions.length === 0) return 0;
    
    const validSubmissions = filteredSubmissions
      .map(s => ({
        ...s,
        percentage: typeof s.percentage === 'string' ? parseFloat(s.percentage) : s.percentage
      }))
      .filter(s => 
        typeof s.percentage === 'number' && 
        !isNaN(s.percentage) && 
        s.percentage !== null
      );
    
    return validSubmissions.length > 0
      ? Math.max(...validSubmissions.map(s => s.percentage))
      : 0;
  })()
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
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage quiz system and users</p>
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Quiz
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
                  <p className="text-2xl font-bold">{users.length}</p>
                  <p className="text-sm text-gray-600">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">{stats.totalSubmissions}</p>
                  <p className="text-sm text-gray-600">Quiz Submissions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-purple-600" />
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
                <Trophy className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold">{classes.length}</p>
                  <p className="text-sm text-gray-600">Classes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="submissions">Quiz Results</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="classes">Class Management</TabsTrigger>
            <TabsTrigger value="question-analytics">Question Analytics</TabsTrigger>
          </TabsList>

          {/* Quiz Results Tab */}
          <TabsContent value="submissions">
            <div className="space-y-6">
              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Filter Quiz Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* FIXED: Class Filter */}
                    <div>
                      <Label>Filter by Class</Label>
                      <select 
                        value={selectedClassFilter} 
                        onChange={(e) => setSelectedClassFilter(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="all">All Classes</option>
                        {classes.map((cls) => (
                          <option key={cls.id} value={cls.id.toString()}>
                            {cls.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date Filter */}
                    <div>
                      <Label>Filter by Date</Label>
                      <select 
                        value={dateFilter} 
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="all">All Time</option>
                        <option value="today">Today</option>
                        <option value="week">Last 7 Days</option>
                        <option value="month">Last 30 Days</option>
                      </select>
                    </div>

                    {/* Search */}
                    <div>
                      <Label>Search Students</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search by name or email..."
                          value={submissionsSearchTerm}
                          onChange={(e) => setSubmissionsSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Clear Filters */}
                    <div className="flex items-end">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setSelectedClassFilter('all');
                          setDateFilter('all');
                          setSubmissionsSearchTerm('');
                        }}
                        className="w-full"
                      >
                        Clear Filters
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Quiz Submissions Table */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Quiz Submissions</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">
                      Showing {filteredSubmissions.length} of {submissions.length} submissions
                      {selectedClassFilter !== 'all' && (
                        <span className="ml-1">
                          • Class: {classes.find(c => c.id.toString() === selectedClassFilter)?.name}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <Button onClick={exportResults} variant="outline" size="sm">
                      <FileDown className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button onClick={clearResults} variant="destructive" size="sm">
                      <Trash2 className="w-4 h-4 mr-2" />
                      {selectedClassFilter === 'all' 
                        ? 'Clear All Results' 
                        : `Clear ${classes.find(c => c.id.toString() === selectedClassFilter)?.name || 'Class'} Results`
                      }
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {filteredSubmissions.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">
                        {submissions.length === 0 
                          ? "No quiz submissions yet." 
                          : "No submissions match your current filters."
                        }
                      </p>
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Class</TableHead>
                          <TableHead>Score</TableHead>
                          <TableHead>Percentage</TableHead>
                          <TableHead>Time Taken</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredSubmissions.map((submission) => (
                          <TableRow key={submission.id}>
                            <TableCell className="font-medium">{submission.userName}</TableCell>
                            <TableCell>{submission.userEmail || '-'}</TableCell>
                            <TableCell>
                              {submission.className ? (
                                <Badge variant="outline">{submission.className}</Badge>
                              ) : (
                                <span className="text-gray-400">No Class</span>
                              )}
                            </TableCell>
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
            </div>
          </TabsContent>

          {/* User Management Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>User Management</CardTitle>
                <Button onClick={() => setShowAddUserModal(true)}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </CardHeader>
              <CardContent>
                {/* Search and Filter */}
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8"
                      />
                    </div>
                  </div>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
                      {classes.map((cls) => (
                        <SelectItem key={cls.id} value={cls.id.toString()}>
                          {cls.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Users Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.full_name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.class_name}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.is_active ? "default" : "secondary"}>
                            {user.is_active ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {user.last_login 
                            ? new Date(user.last_login).toLocaleDateString()
                            : 'Never'
                          }
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditUser(user)}
                              title="Edit User"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleResetPassword(user.id)}
                              title="Reset Password"
                            >
                              <Key className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteUser(user.id, user.full_name)}
                              title="Delete User"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Class Management Tab */}
          <TabsContent value="classes">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Class Management</CardTitle>
                <Button onClick={() => setShowAddClassModal(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Class
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Class Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {classes.map((classItem) => (
                      <TableRow key={classItem.id}>
                        <TableCell className="font-medium">{classItem.name}</TableCell>
                        <TableCell>{classItem.description || '-'}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{classItem.user_count} users</Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(classItem.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditClass(classItem)}
                              title="Edit Class"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteClass(classItem.id, classItem.name, classItem.user_count)}
                              title="Delete Class"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
            <div className="space-y-6">
              {getQuestionAnalytics().slice(0, 10).map((stat) => {
                // Find the original question to get all options
                const originalQuestion = quizQuestions.find(q => q.id === stat.questionId);
                
                return (
                  <Card key={stat.questionId} className="border">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold">Q{stat.questionId}</span>
                          <Badge variant="outline">{stat.domain}</Badge>
                          <Badge 
                            variant={stat.successRate >= 70 ? "default" : "destructive"}
                          >
                            {stat.successRate}% success
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.correctAttempts}/{stat.totalAttempts} attempts
                        </div>
                      </div>
                      
                      {/* Full Question */}
                      <div 
                        className="text-base mb-4" 
                        dangerouslySetInnerHTML={{ __html: stat.question }}
                      />
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* All Answer Options */}
                     {Array.isArray(originalQuestion?.options) && (
  <div className="space-y-2">
    <h4 className="font-medium text-sm text-gray-700 mb-3">Answer Options:</h4>
    {originalQuestion.options.map((option, index) => {
      const isCorrect = Array.isArray(stat.correctAnswer) 
        ? stat.correctAnswer.includes(option)
        : stat.correctAnswer === option;

      return (
        <div 
          key={index} 
          className={`p-3 rounded border ${
            isCorrect 
              ? 'border-green-200 bg-green-50' 
              : 'border-gray-200 bg-gray-50'
          }`}
        >
          <div className="flex items-start space-x-2">
            <span className={`text-sm font-medium px-2 py-1 rounded ${
              isCorrect 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {String.fromCharCode(65 + index)}
            </span>
            <div 
              className="flex-1"
              dangerouslySetInnerHTML={{ __html: option }}
            />
            {isCorrect && (
              <Circle className="w-4 h-4 text-green-500" />
            )}
          </div>
        </div>
      );
    })}
  </div>
)}

                      
                      {/* Explanation */}
                      {originalQuestion?.explanation && (
                        <div className="border-t pt-4">
                          <h5 className="font-medium text-sm text-gray-700 mb-2">Explanation:</h5>
                          <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: originalQuestion.explanation }} />
                        </div>
                      )}
                      
                      {/* Wrong Answers Analysis */}
                      {stat.wrongAnswers.length > 0 && (
                        <div className="border-t pt-4">
                          <h5 className="font-medium text-sm text-gray-700 mb-3">
                            Common Wrong Answers ({stat.wrongAnswers.length} students):
                          </h5>
                          <div className="space-y-2 max-h-40 overflow-y-auto">
                            {stat.wrongAnswers.slice(0, 8).map((wrongAnswer, index) => (
                              <div key={index} className="flex items-start space-x-2 text-sm bg-red-50 p-2 rounded border border-red-100">
                                <span className="font-medium text-red-700 shrink-0">{wrongAnswer.userName}:</span>
                                <div className="text-red-600 min-w-0">
                                  {wrongAnswer.userAnswer ? (
                                    <div dangerouslySetInnerHTML={{ 
                                      __html: Array.isArray(wrongAnswer.userAnswer) ? 
                                        wrongAnswer.userAnswer.join(', ') : 
                                        wrongAnswer.userAnswer.toString()
                                    }} />
                                  ) : (
                                    <span className="italic">No answer</span>
                                  )}
                                </div>
                              </div>
                            ))}
                            {stat.wrongAnswers.length > 8 && (
                              <p className="text-xs text-gray-500 italic">
                                +{stat.wrongAnswers.length - 8} more
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
              
              {getQuestionAnalytics().length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No question analytics available yet.</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </TabsContent>

        </Tabs>

        {/* Add User Modal */}
        {showAddUserModal && (
          <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Add New User</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddUser} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={newUser.fullName}
                      onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="class">Class</Label>
                    <select 
                      value={newUser.classId} 
                      onChange={(e) => setNewUser({ ...newUser, classId: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Select a class</option>
                      {classes.map((cls) => (
                        <option key={cls.id} value={cls.id.toString()}>
                          {cls.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="password">Password (optional)</Label>
                    <Input
                      id="password"
                      type="password"
                      value={newUser.password}
                      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                      placeholder="Leave empty for default password"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit" className="flex-1">Create User</Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowAddUserModal(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Edit User Modal */}
        {showEditUserModal && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Edit User: {selectedUser.full_name}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateUser} className="space-y-4">
                  <div>
                    <Label htmlFor="editEmail">Email</Label>
                    <Input
                      id="editEmail"
                      type="email"
                      value={editUser.email}
                      onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="editFullName">Full Name</Label>
                    <Input
                      id="editFullName"
                      value={editUser.fullName}
                      onChange={(e) => setEditUser({ ...editUser, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="editClass">Class</Label>
                    <select 
                      value={editUser.classId} 
                      onChange={(e) => setEditUser({ ...editUser, classId: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Select a class</option>
                      {classes.map((cls) => (
                        <option key={cls.id} value={cls.id.toString()}>
                          {cls.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="editStatus">Status</Label>
                    <select 
                      value={editUser.isActive.toString()} 
                      onChange={(e) => setEditUser({ ...editUser, isActive: e.target.value === 'true' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="editPassword">New Password (optional)</Label>
                    <Input
                      id="editPassword"
                      type="password"
                      value={editUser.newPassword}
                      onChange={(e) => setEditUser({ ...editUser, newPassword: e.target.value })}
                      placeholder="Leave empty to keep current password"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit" className="flex-1">Update User</Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        setShowEditUserModal(false);
                        setSelectedUser(null);
                        setEditUser({ email: '', fullName: '', classId: '', isActive: true, newPassword: '' });
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add Class Modal */}
        {showAddClassModal && (
          <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Add New Class</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddClass} className="space-y-4">
                  <div>
                    <Label htmlFor="className">Class Name</Label>
                    <Input
                      id="className"
                      value={newClass.name}
                      onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                      placeholder="e.g., Python Beginners 2024"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="classDescription">Description (optional)</Label>
                    <Input
                      id="classDescription"
                      value={newClass.description}
                      onChange={(e) => setNewClass({ ...newClass, description: e.target.value })}
                      placeholder="Brief description of the class"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit" className="flex-1">Create Class</Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        setShowAddClassModal(false);
                        setNewClass({ name: '', description: '' });
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Edit Class Modal */}
        {showEditClassModal && selectedClassForEdit && (
          <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden">
              <CardHeader>
                <CardTitle>Edit Class: {selectedClassForEdit.name}</CardTitle>
              </CardHeader>
              <CardContent className="overflow-y-auto">
                {/* Class Details Form */}
                <form onSubmit={handleUpdateClass} className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="editClassName">Class Name</Label>
                      <Input
                        id="editClassName"
                        value={editClass.name}
                        onChange={(e) => setEditClass({ ...editClass, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="editClassDescription">Description (optional)</Label>
                      <Input
                        id="editClassDescription"
                        value={editClass.description}
                        onChange={(e) => setEditClass({ ...editClass, description: e.target.value })}
                        placeholder="Brief description of the class"
                      />
                    </div>
                  </div>
                  <Button type="submit" size="sm">Update Class Details</Button>
                </form>

                {/* Student Assignment */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Assign Students</h3>
                  
                  {isLoadingStudents ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="mt-2 text-gray-600">Loading students...</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Search Box */}
                      <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search students by name or email..."
                          value={studentSearchTerm}
                          onChange={(e) => setStudentSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>

                      {/* Selected Count */}
                      <div className="text-sm text-gray-600">
                        {selectedStudentIds.length} student(s) selected
                      </div>

                      {/* Student List */}
                      <div className="border rounded-lg max-h-64 overflow-y-auto">
                        {filteredStudents.length === 0 ? (
                          <div className="p-4 text-center text-gray-500">
                            {studentSearchTerm ? 'No students found matching your search' : 'No students available'}
                          </div>
                        ) : (
                          <div className="divide-y">
                            {filteredStudents.map((student) => {
                              const isSelected = selectedStudentIds.includes(student.id);
                              return (
                                <label
                                  key={student.id}
                                  className={`flex items-center p-3 cursor-pointer hover:bg-gray-50 ${
                                    isSelected ? 'bg-blue-50' : ''
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => handleStudentSelection(student.id)}
                                    className="mr-3 rounded"
                                  />
                                  <div className="flex-1">
                                    <p className="font-medium text-sm">{student.full_name}</p>
                                    <p className="text-xs text-gray-500">{student.email}</p>
                                    {student.class_name && student.class_id !== selectedClassForEdit.id && (
                                      <p className="text-xs text-orange-600">
                                        Currently in: {student.class_name}
                                      </p>
                                    )}
                                  </div>
                                  {isSelected && (
                                    <Badge variant="default" className="ml-2">Selected</Badge>
                                  )}
                                </label>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* Save Button */}
                      <div className="flex justify-start">
                        <Button onClick={handleSaveStudentAssignments} className="bg-green-600 hover:bg-green-700">
                          Save Student Assignments
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Actions */}
                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        setShowEditClassModal(false);
                        setSelectedClassForEdit(null);
                        setEditClass({ name: '', description: '' });
                        setAllStudents([]);
                        setSelectedStudentIds([]);
                        setStudentSearchTerm('');
                      }}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
const getOriginalQuestions = () => {
  return quizQuestions;
};