'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { buttonVariants } from '@/components/ui/button';
import { navLinks, ctaLink } from '@/data/navigation';
import { SmartLink } from '@/components/ui/smart-link';
import { cn } from '@/lib/utils';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'min-w-[44px] min-h-[44px]'
        )}
        aria-expanded={open}
        aria-label="Open navigation menu"
      >
        <Menu className="size-6" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[280px] p-0">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        <nav className="flex flex-col h-full" aria-label="Mobile navigation">
          {/* Navigation Links */}
          <ul className="flex flex-col gap-1 p-4 pt-12" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center py-3 px-4 rounded-md text-base transition-colors min-h-[44px]',
                    pathname === link.path
                      ? 'font-bold text-primary'
                      : 'text-foreground hover:bg-muted'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-auto p-4 border-t">
            <SmartLink
              href={ctaLink.path}
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ variant: 'default', size: 'default' }),
                'w-full min-h-[44px]'
              )}
            >
              {ctaLink.label}
            </SmartLink>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
