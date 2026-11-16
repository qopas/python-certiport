'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Modal } from '@/components/ui/modal';
import { apiFetch, errorMessage } from '@/lib/client/api';
import type { AdminClass, AdminUser } from '@/lib/admin/types';
import { ClassSelect } from './common';

interface Props {
  user: AdminUser | null; // null = create
  classes: AdminClass[];
  onClose: () => void;
  onSaved: (message: string) => void;
}

export const UserFormModal = ({ user, classes, onClose, onSaved }: Props) => {
  const [email, setEmail] = useState(user?.email ?? '');
  const [fullName, setFullName] = useState(user?.fullName ?? '');
  const [classId, setClassId] = useState(user?.classId ? String(user.classId) : '');
  const [isActive, setIsActive] = useState(user?.isActive ?? true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const formId = user ? `edit-user-${user.id}` : 'add-user';

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const body = { email, fullName, classId: classId || null };
      if (user) {
        await apiFetch(`/api/admin/users/${user.id}`, { method: 'PUT', json: { ...body, isActive, newPassword: password || null } });
        onSaved('User updated.');
      } else {
        const result = await apiFetch<{ temporaryPassword: string | null }>('/api/admin/users', { method: 'POST', json: { ...body, password: password || null } });
        onSaved(result.temporaryPassword ? `User created. One-time password: ${result.temporaryPassword}` : 'User created.');
      }
    } catch (e) {
      setError(errorMessage(e));
      setSaving(false);
    }
  };

  return (
    <Modal
      title={user ? `Edit user: ${user.fullName}` : 'Add new user'}
      onClose={onClose}
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" form={formId} disabled={saving}>
            {saving ? 'Saving…' : user ? 'Save changes' : 'Create user'}
          </Button>
        </>
      }
    >
      <form id={formId} onSubmit={submit} className="space-y-4">
        {error && (
          <p role="alert" className="rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700">
            {error}
          </p>
        )}
        <div className="space-y-1">
          <Label htmlFor={`${formId}-name`}>Full name</Label>
          <Input id={`${formId}-name`} data-autofocus value={fullName} onChange={(e) => setFullName(e.target.value)} required maxLength={100} />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`${formId}-email`}>Email</Label>
          <Input id={`${formId}-email`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={255} />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`${formId}-class`}>Class</Label>
          <ClassSelect id={`${formId}-class`} classes={classes} value={classId} onChange={setClassId} noneLabel="No class" />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`${formId}-password`}>{user ? 'New password (optional)' : 'Password (optional)'}</Label>
          <Input
            id={`${formId}-password`}
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            maxLength={128}
          />
          {!user && <p className="text-xs text-gray-500">Leave empty to generate a one-time password.</p>}
        </div>
        {user && (
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} className="h-4 w-4" />
            Active (inactive users cannot sign in)
          </label>
        )}
      </form>
    </Modal>
  );
};
