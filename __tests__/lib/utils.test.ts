import { describe, it, expect } from 'vitest';
import { cn, isExternalUrl, sortByKey } from '@/lib/utils';

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('drops falsy values', () => {
    expect(cn('a', false, undefined, null, 'b')).toBe('a b');
  });

  it('dedupes conflicting tailwind classes (last wins)', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });
});

describe('isExternalUrl', () => {
  it('treats http(s) URLs as external', () => {
    expect(isExternalUrl('http://example.com')).toBe(true);
    expect(isExternalUrl('https://discord.gg/abc')).toBe(true);
  });

  it('treats protocol-relative URLs as external', () => {
    expect(isExternalUrl('//cdn.example.com/x.png')).toBe(true);
  });

  it('treats mailto and tel as external', () => {
    expect(isExternalUrl('mailto:hi@example.com')).toBe(true);
    expect(isExternalUrl('tel:+15551234567')).toBe(true);
  });

  it('treats internal app routes as not external', () => {
    expect(isExternalUrl('/about')).toBe(false);
    expect(isExternalUrl('/')).toBe(false);
  });

  it('treats relative paths as not external', () => {
    expect(isExternalUrl('about')).toBe(false);
    expect(isExternalUrl('#section')).toBe(false);
  });
});

describe('sortByKey', () => {
  it('sorts items alphabetically by key', () => {
    const items = [
      { id: '3', role: 'C' },
      { id: '1', role: 'A' },
      { id: '2', role: 'B' },
    ];
    const result = sortByKey(items, (item) => item.role);
    expect(result.map((item) => item.id)).toEqual(['1', '2', '3']);
  });

  it('groups duplicate keys together in alphabetical position', () => {
    const items = [
      { id: 'education', role: 'Education Lead' },
      { id: 'advocacy-1', role: 'Advocacy Lead' },
      { id: 'campus-swm', role: 'Campus SWM Lead' },
      { id: 'advocacy-2', role: 'Advocacy Lead' },
    ];
    const result = sortByKey(items, (item) => item.role);
    expect(result.map((item) => item.id)).toEqual([
      'advocacy-1',
      'advocacy-2',
      'campus-swm',
      'education',
    ]);
  });

  it('preserves relative order within a duplicate-key group (stable sort)', () => {
    const items = [
      { id: 'b1', role: 'B' },
      { id: 'a1', role: 'A' },
      { id: 'a2', role: 'A' },
      { id: 'a3', role: 'A' },
    ];
    const result = sortByKey(items, (item) => item.role);
    expect(result.map((item) => item.id)).toEqual(['a1', 'a2', 'a3', 'b1']);
  });

  it('sorts case-insensitively', () => {
    const items = [
      { id: '1', role: 'banana' },
      { id: '2', role: 'Apple' },
      { id: '3', role: 'cherry' },
    ];
    const result = sortByKey(items, (item) => item.role);
    expect(result.map((item) => item.id)).toEqual(['2', '1', '3']);
  });

  it('handles an empty array', () => {
    expect(sortByKey([], (item: { role: string }) => item.role)).toEqual([]);
  });

  it('handles a single item', () => {
    const items = [{ id: '1', role: 'A' }];
    expect(sortByKey(items, (item) => item.role)).toEqual(items);
  });

  it('does not mutate the input array', () => {
    const items = [
      { id: '2', role: 'B' },
      { id: '1', role: 'A' },
    ];
    sortByKey(items, (item) => item.role);
    expect(items.map((item) => item.id)).toEqual(['2', '1']);
  });
});
