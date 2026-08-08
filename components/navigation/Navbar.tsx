'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { navLinks, ctaLink } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';
import { buttonVariants } from '@/components/ui/button';
import { SmartLink } from '@/components/ui/smart-link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { MobileMenu } from '@/components/navigation/MobileMenu';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xs border-b">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 hover:opacity-80 transition-opacity sm:flex-initial"
        >
          <Image
            src="/ewb-logo.svg"
            alt={`${siteConfig.name} logo`}
            width={1496}
            height={925}
            className="h-8 w-auto shrink-0 sm:h-10"
            priority
          />
          <span className="truncate text-base font-bold text-brand-dark sm:text-xl">
            {siteConfig.shortName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink
                  href={link.path}
                  className={cn(
                    'px-3 py-2 text-sm transition-colors',
                    pathname === link.path
                      ? 'font-bold text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA Button */}
        <SmartLink
          href={ctaLink.path}
          className={cn(
            buttonVariants({ variant: 'default', size: 'default' }),
            'hidden md:inline-flex'
          )}
        >
          {ctaLink.label}
        </SmartLink>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
