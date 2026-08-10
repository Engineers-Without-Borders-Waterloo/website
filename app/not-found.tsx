import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <p className="text-heading-xl text-primary font-bold">404</p>
        <h1 className="text-heading-md lg:text-heading-lg">Page not found</h1>
        <p className="text-body-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div>
          <Link href="/" className={buttonVariants({ variant: 'default', size: 'lg' })}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
