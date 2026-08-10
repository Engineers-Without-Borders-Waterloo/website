import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * True for absolute/external URLs (http, https, mailto, etc.) as opposed to
 * internal app routes like "/about". Used to decide whether a link should
 * open in a new tab.
 */
export function isExternalUrl(href: string): boolean {
  return /^(?:[a-z]+:)?\/\//i.test(href) || /^(?:mailto|tel):/i.test(href);
}

/**
 * Sorts a list alphabetically by key (localeCompare, case-insensitive).
 * Array.prototype.sort is stable, so items sharing the same key (e.g. two
 * people with the same role) keep their relative input order and always
 * end up rendered consecutively — no manual grouping needed.
 *
 * Intended for rosters that should require zero manual ordering: add an
 * entry anywhere in the source array and it lands in the right alphabetical
 * spot, automatically next to any duplicates.
 */
export function sortByKey<T>(items: T[], getKey: (item: T) => string): T[] {
  return [...items].sort((a, b) =>
    getKey(a).localeCompare(getKey(b), undefined, { sensitivity: 'base' })
  );
}
