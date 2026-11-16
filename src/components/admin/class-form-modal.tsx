'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Modal } from '@/components/ui/modal';
import { useApi } from '@/hooks/use-api';
import { apiFetch, errorMessage } from '@/lib/client/api';
import type { AdminClass, RosterStudent } from '@/lib/admin/types';
import { ErrorState, LoadingState } from './common';

interface Props {
  cls: AdminClass | null; // null = create
  onClose: () => void;
  onSaved: (message: string) => void;
}

// Edits a class's details and, for an existing class, which active students belong to it.
export const ClassFormModal = ({ cls, onClose, onSaved }: Props) => {
  const [name, setName] = useState(cls?.name ?? '');
  const [description, setDescription] = useState(cls?.description ?? '');
  const [studentSearch, setStudentSearch] = useState('');
  const [selection, setSelection] = useState<Set<number> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const roster = useApi<RosterStudent[]>(cls ? '/api/admin/roster' : null);

  const initialMembers = useMemo(
    () => new Set((roster.data ?? []).filter((s) => cls && s.classId === cls.id).map((s) => s.id)),
    [roster.data, cls],
  );
  const selected = selection ?? initialMembers;
  const term = studentSearch.trim().toLowerCase();
  const visible = (roster.data ?? []).filter((s) => !term || s.fullName.toLowerCase().includes(term) || s.email.toLowerCase().includes(term));
  const membersChanged = selection !== null && (selection.size !== initialMembers.size || [...selection].some((id) => !initialMembers.has(id)));

  const toggle = (id: number) =>
    setSelection((prev) => {
      const next = new Set(prev ?? initialMembers);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const body = { name, description };
      if (!cls) {
        await apiFetch('/api/admin/classes', { method: 'POST', json: body });
        onSaved(`Class "${name.trim()}" created.`);
        return;
      }
      await apiFetch(`/api/admin/classes/${cls.id}`, { method: 'PUT', json: body });
      if (membersChanged) {
        await apiFetch(`/api/admin/classes/${cls.id}/students`, { method: 'PUT', json: { studentIds: [...selected] } });
      }
      onSaved(`Class "${name.trim()}" saved${membersChanged ? ` with ${selected.size} students` : ''}.`);
    } catch (e) {
      setError(errorMessage(e));
      setSaving(false);
    }
  };

  const formId = cls ? `edit-class-${cls.id}` : 'add-class';
  return (
    <Modal
      className={cls ? 'max-w-2xl' : undefined}
      title={cls ? `Edit class: ${cls.name}` : 'Add new class'}
      onClose={onClose}
      footer={
        <>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" form={formId} disabled={saving}>
            {saving ? 'Saving…' : cls ? 'Save changes' : 'Create class'}
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
          <Label htmlFor={`${formId}-name`}>Class name</Label>
          <Input id={`${formId}-name`} data-autofocus value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`${formId}-description`}>Description</Label>
          <Input id={`${formId}-description`} value={description} onChange={(e) => setDescription(e.target.value)} maxLength={1000} />
        </div>

        {cls && (
          <fieldset className="space-y-3 border-t pt-4">
            <legend className="font-medium text-gray-900">
              Students in this class <span className="text-sm font-normal text-gray-500">({selected.size} selected)</span>
            </legend>
            {roster.error ? (
              <ErrorState error={roster.error} onRetry={roster.reload} />
            ) : !roster.data ? (
              <LoadingState label="Loading students…" />
            ) : (
              <>
                <div className="relative">
                  <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" aria-hidden />
                  <Input aria-label="Filter students" placeholder="Filter by name or email…" value={studentSearch} onChange={(e) => setStudentSearch(e.target.value)} className="pl-10" />
                </div>
                <ul className="max-h-72 divide-y overflow-y-auto rounded border">
                  {visible.map((s) => (
                    <li key={s.id}>
                      <label className="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-gray-50">
                        <input type="checkbox" className="h-4 w-4" checked={selected.has(s.id)} onChange={() => toggle(s.id)} />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-medium">{s.fullName}</span>
                          <span className="block truncate text-xs text-gray-500">{s.email}</span>
                        </span>
                        {s.className && s.classId !== cls.id && <span className="shrink-0 text-xs text-gray-500">now in {s.className}</span>}
                      </label>
                    </li>
                  ))}
                  {visible.length === 0 && <li className="px-3 py-4 text-center text-sm text-gray-500">No students match.</li>}
                </ul>
                <p className="text-xs text-gray-500">Ticking a student from another class moves them here; unticking removes them from this class.</p>
              </>
            )}
          </fieldset>
        )}
      </form>
    </Modal>
  );
};
