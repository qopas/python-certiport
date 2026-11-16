// RFC 4180 CSV with spreadsheet formula-injection protection (cells starting with = + - @ tab CR
// are prefixed with ' so Excel/Sheets show them as text).
const FORMULA_START = /^[=+\-@\t\r]/;

export const csvCell = (value: string | number | null | undefined): string => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : '';
  const text = FORMULA_START.test(value) ? `'${value}` : value;
  return /[",\r\n]/.test(text) || text !== text.trim() ? `"${text.replace(/"/g, '""')}"` : text;
};

export const csvRow = (cells: (string | number | null | undefined)[]) => `${cells.map(csvCell).join(',')}\r\n`;
