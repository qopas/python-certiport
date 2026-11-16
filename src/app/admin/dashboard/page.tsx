'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BarChart3, LogOut, Percent, School, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useApi } from '@/hooks/use-api';
import type { AdminClass, AdminSummary } from '@/lib/admin/types';
import { ErrorState, LoadingState } from '@/components/admin/common';
import { SubmissionsTab } from '@/components/admin/submissions-tab';
import { UsersTab } from '@/components/admin/users-tab';
import { ClassesTab } from '@/components/admin/classes-tab';
import { QuestionAnalyticsTab } from '@/components/admin/question-analytics-tab';

// Each tab loads only its own page of data when it is opened; classes are shared by all tabs.
export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState('submissions');
  const summary = useApi<AdminSummary>('/api/admin/summary');
  const classes = useApi<AdminClass[]>('/api/admin/classes');
  const { reload: reloadSummary } = summary;
  const { reload: reloadClasses } = classes;

  const refreshShared = () => {
    reloadSummary();
    reloadClasses();
  };

  const signOut = async () => {
    await fetch('/api/auth', { method: 'DELETE' }).catch(() => undefined);
    router.replace('/login');
  };

  const cards = [
    { label: 'Students', value: summary.data?.totalStudents, icon: Users, tone: 'text-blue-600' },
    { label: 'Quiz submissions', value: summary.data?.totalSubmissions, icon: BarChart3, tone: 'text-green-600' },
    { label: 'Average score', value: summary.data ? `${summary.data.averageScore}%` : undefined, icon: Percent, tone: 'text-purple-600' },
    { label: 'Classes', value: summary.data?.totalClasses, icon: School, tone: 'text-yellow-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin dashboard</h1>
            <p className="text-gray-600">Manage quiz results, users and classes</p>
          </div>
          <Button type="button" variant="outline" size="sm" onClick={signOut}>
            <LogOut className="h-4 w-4" /> Sign out
          </Button>
        </header>

        <section className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4" aria-label="Summary">
          {cards.map(({ label, value, icon: Icon, tone }) => (
            <Card key={label}>
              <CardContent className="flex items-center gap-3 p-6">
                <Icon className={`h-8 w-8 ${tone}`} aria-hidden />
                <div>
                  <p className="text-2xl font-bold">{value ?? '—'}</p>
                  <p className="text-sm text-gray-600">{label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {classes.error ? (
          <ErrorState error={classes.error} onRetry={classes.reload} />
        ) : !classes.data ? (
          <LoadingState label="Loading dashboard…" />
        ) : (
          <Tabs value={tab} onValueChange={setTab} className="space-y-4">
            <TabsList>
              <TabsTrigger value="submissions">Quiz results</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="classes">Classes</TabsTrigger>
              <TabsTrigger value="analytics">Question analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="submissions">
              <SubmissionsTab classes={classes.data} onChanged={refreshShared} />
            </TabsContent>
            <TabsContent value="users">
              <UsersTab classes={classes.data} onChanged={refreshShared} />
            </TabsContent>
            <TabsContent value="classes">
              <ClassesTab classes={classes.data} onChanged={refreshShared} />
            </TabsContent>
            <TabsContent value="analytics">
              <QuestionAnalyticsTab classes={classes.data} />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}
