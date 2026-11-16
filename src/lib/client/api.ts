// Browser-side JSON fetch: throws ApiError with the server's `{ error }` message on failure.
export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

export const apiFetch = async <T>(url: string, init?: RequestInit & { json?: unknown }): Promise<T> => {
  const { json, ...rest } = init ?? {};
  const response = await fetch(url, {
    ...rest,
    headers: json === undefined ? rest.headers : { 'Content-Type': 'application/json', ...rest.headers },
    body: json === undefined ? rest.body : JSON.stringify(json),
  });
  const data: unknown = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) {
    const message =
      typeof data === 'object' && data !== null && typeof (data as { error?: unknown }).error === 'string'
        ? (data as { error: string }).error
        : `Request failed (${response.status})`;
    if (response.status === 401 && typeof window !== 'undefined') window.location.assign('/login');
    throw new ApiError(response.status, message);
  }
  return data as T;
};

// Appends the non-empty params to url.
export const withQuery = (url: string, params: Record<string, string | number | null | undefined>) => {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== null && value !== undefined && value !== '') search.set(key, String(value));
  }
  const qs = search.toString();
  return qs ? `${url}?${qs}` : url;
};

export const errorMessage = (error: unknown) => (error instanceof Error ? error.message : 'Something went wrong');
