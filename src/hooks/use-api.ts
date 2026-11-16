'use client';

import { useCallback, useEffect, useState } from 'react';
import { apiFetch } from '@/lib/client/api';

interface ApiState<T> {
  data: T | undefined;
  error: Error | null;
  isLoading: boolean;
  reload: () => void;
}

// GETs url (null = skip) and refetches when it changes or on reload(). The previous data stays
// visible while the next request runs; responses for an outdated request are dropped.
export const useApi = <T,>(url: string | null): ApiState<T> => {
  const [version, setVersion] = useState(0);
  const key = url === null ? null : `${version} ${url}`;
  const [state, setState] = useState<{ key: string | null; data?: T; error: Error | null }>({ key: null, error: null });

  useEffect(() => {
    if (url === null || key === null) return;
    const controller = new AbortController();
    apiFetch<T>(url, { signal: controller.signal })
      .then((data) => setState({ key, data, error: null }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        setState((prev) => ({ key, data: prev.data, error: error instanceof Error ? error : new Error(String(error)) }));
      });
    return () => controller.abort();
  }, [url, key]);

  const reload = useCallback(() => setVersion((v) => v + 1), []);
  const settled = state.key === key;
  return { data: state.data, error: settled ? state.error : null, isLoading: key !== null && !settled, reload };
};

export const useDebouncedValue = <T,>(value: T, delayMs = 300): T => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);
  return debounced;
};
