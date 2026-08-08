import NextLink from 'next/link';
import { isExternalUrl } from '@/lib/utils';

type SmartLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  href: string;
};

/**
 * A single link component that does the right thing based on the destination:
 *
 * - External URLs (http(s), mailto, tel) render a plain `<a>` that opens in a
 *   new tab with `rel="noopener noreferrer"` for security.
 * - Internal app routes render a Next.js `<Link>` for client-side navigation.
 *
 * This keeps every "open external links in a new tab" decision in one place
 * instead of repeating the `target`/`rel` dance at each call site.
 */
export function SmartLink({ href, children, ...props }: SmartLinkProps) {
  if (isExternalUrl(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
