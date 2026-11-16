'use client';

import { useState } from 'react';
import { Edit, Plus, Trash2, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { apiFetch, errorMessage } from '@/lib/client/api';
import type { AdminClass } from '@/lib/admin/types';
import { EmptyState } from './common';
import { ClassFormModal } from './class-form-modal';

export const ClassesTab = ({ classes, onChanged }: { classes: AdminClass[]; onChanged: () => void }) => {
  const [editing, setEditing] = useState<AdminClass | 'new' | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const deleteClass = async (cls: AdminClass) => {
    if (!window.confirm(`Delete the class "${cls.name}"? This cannot be undone.`)) return;
    try {
      const { message } = await apiFetch<{ message: string }>(`/api/admin/classes/${cls.id}`, { method: 'DELETE' });
      setNotice(message);
      onChanged();
    } catch (e) {
      setNotice(errorMessage(e));
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Class management</CardTitle>
        <Button type="button" onClick={() => setEditing('new')}>
          <Plus className="h-4 w-4" /> Add class
        </Button>
      </CardHeader>
      <CardContent>
        {notice && (
          <div role="status" className="mb-4 flex items-start justify-between gap-3 rounded border border-blue-200 bg-blue-50 p-3 text-sm text-blue-900">
            <span>{notice}</span>
            <button type="button" aria-label="Dismiss" onClick={() => setNotice(null)} className="text-blue-700 hover:text-blue-900">
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
        {classes.length === 0 ? (
          <EmptyState>No classes yet.</EmptyState>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Active students</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.map((cls) => (
                <TableRow key={cls.id}>
                  <TableCell className="font-medium">{cls.name}</TableCell>
                  <TableCell>{cls.description || '—'}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{cls.userCount}</Badge>
                  </TableCell>
                  <TableCell>{cls.createdAt ? new Date(cls.createdAt).toLocaleDateString() : '—'}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button type="button" variant="outline" size="sm" onClick={() => setEditing(cls)} aria-label={`Edit ${cls.name}`} title="Edit class">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button type="button" variant="destructive" size="sm" onClick={() => deleteClass(cls)} aria-label={`Delete ${cls.name}`} title="Delete class">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>

      {editing !== null && (
        <ClassFormModal
          cls={editing === 'new' ? null : editing}
          onClose={() => setEditing(null)}
          onSaved={(message) => {
            setEditing(null);
            setNotice(message);
            onChanged();
          }}
        />
      )}
    </Card>
  );
};
