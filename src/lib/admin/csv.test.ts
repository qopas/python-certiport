import { describe, expect, it } from 'vitest';
import { csvCell, csvRow } from './csv';

describe('csv', () => {
  it('quotes separators and quotes', () => {
    expect(csvCell('a,b')).toBe('"a,b"');
    expect(csvCell('say "hi"')).toBe('"say ""hi"""');
    expect(csvCell('line\nbreak')).toBe('"line\nbreak"');
  });
  it('neutralizes formulas', () => {
    expect(csvCell('=HYPERLINK("x")')).toBe(`"'=HYPERLINK(""x"")"`);
    expect(csvCell('+1')).toBe("'+1");
    expect(csvCell('@sum')).toBe("'@sum");
  });
  it('writes numbers and blanks', () => {
    expect(csvRow(['Ana', 71.43, null, undefined, 0])).toBe('Ana,71.43,,,0\r\n');
  });
});
