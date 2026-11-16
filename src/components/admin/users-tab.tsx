'use client';

import { useState } from 'react';
import { Edit, Key, Search, Trash2, UserPlus, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useApi, useDebouncedValue } from '@/hooks/use-api';
import { apiFetch, errorMessage, withQuery } from '@/lib/client/api';
import type { AdminClass, AdminUser, Page } from '@/lib/admin/types';
import { ClassSelect, EmptyState, ErrorState, LoadingState, Pagination } from './common';
import { UserFormModal } from './user-form-modal';

const PAGE_SIZE = 25;

export const UsersTab = ({ classes, onChanged }: { classes: AdminClass[]; onChanged: () => void }) => {
  const [search, setSearch] = useState('');
  const [classId, setClassId] = useState('all');
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState<AdminUser | 'new' | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const debouncedSearch = useDebouncedValue(search.trim());
  const { data, error, isLoading, reload } = useApi<Page<AdminUser>>(
    withQuery('/api/admin/users', { search: debouncedSearch, classId: classId === 'all' ? null : classId, page, pageSize: PAGE_SIZE }),
  );

  const afterChange = (message: string) => {
    setNotice(message);
    reload();
    onChanged();
  };

  const resetPassword = async (user: AdminUser) => {
    if (!window.confirm(`Reset the password of ${user.fullName}? Their current password stops working.`)) return;
    try {
      const { temporaryPassword } = await apiFetch<{ temporaryPassword: string }>(`/api/admin/users/${user.id}/reset-password`, { method: 'POST' });
      setNotice(`New one-time password for ${user.fullName}: ${temporaryPassword}`);
    } catch (e) {
      setNotice(errorMessage(e));
    }
  };

  const deleteUser = async (user: AdminUser) => {
    if (!window.confirm(`Permanently delete ${user.fullName} and all their quiz results? This cannot be undone.`)) return;
    try {
      const { message } = await apiFetch<{ message: string }>(`/api/admin/users/${user.id}`, { method: 'DELETE' });
      afterChange(message);
    } catch (e) {
      setNotice(errorMessage(e));
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>User management</CardTitle>
        <Button type="button" onClick={() => setEditing('new')}>
          <UserPlus className="h-4 w-4" /> Add user
        </Button>
      </CardHeader>
      <CardContent>
        {notice && (
          <div role="status" className="mb-4 flex items-start justify-between gap-3 rounded border border-blue-200 bg-blue-50 p-3 text-sm text-blue-900">
            <span className="select-all break-all">{notice}</span>
            <button type="button" aria-label="Dismiss" onClick={() => setNotice(null)} className="text-blue-700 hover:text-blue-900">
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
        <div className="mb-4 flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" aria-hidden />
            <Input
              aria-label="Search users"
              placeholder="Search by name or email…"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="pl-10"
            />
          </div>
          <div className="md:w-56">
            <label htmlFor="users-class" className="sr-only">
              Class
            </label>
            <ClassSelect
              id="users-class"
              classes={classes}
              value={classId}
              onChange={(v) => {
                setClassId(v);
                setPage(1);
              }}
              allLabel="All classes"
            />
          </div>
        </div>

        {error ? (
          <ErrorState error={error} onRetry={reload} />
        ) : !data ? (
          <LoadingState />
        ) : data.items.length === 0 ? (
          <EmptyState>No users match.</EmptyState>
        ) : (
          <div className={isLoading ? 'opacity-60 transition-opacity' : undefined} aria-busy={isLoading}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last login</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.items.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.fullName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.className ? <Badge variant="outline">{user.className}</Badge> : <span className="text-gray-400">No class</span>}</TableCell>
                    <TableCell>
                      <Badge variant={user.isActive ? 'default' : 'secondary'}>{user.isActive ? 'Active' : 'Inactive'}</Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" size="sm" onClick={() => setEditing(user)} aria-label={`Edit ${user.fullName}`} title="Edit user">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button type="button" variant="outline" size="sm" onClick={() => resetPassword(user)} aria-label={`Reset password of ${user.fullName}`} title="Reset password">
                          <Key className="h-4 w-4" />
                        </Button>
                        <Button type="button" variant="destructive" size="sm" onClick={() => deleteUser(user)} aria-label={`Delete ${user.fullName}`} title="Delete user">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} isLoading={isLoading} />
          </div>
        )}
      </CardContent>

      {editing !== null && (
        <UserFormModal
          user={editing === 'new' ? null : editing}
          classes={classes}
          onClose={() => setEditing(null)}
          onSaved={(message) => {
            setEditing(null);
            afterChange(message);
          }}
        />
      )}
    </Card>
  );
};
