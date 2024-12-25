import Link from 'next/link';

import { LogoFull } from './logo-full';
import { cn } from '@/lib/cn';

export function Navbar({
  variant = 'default',
}: {
  variant?: 'default' | 'navy';
}) {
  return (
    <header className="sticky left-0 top-0 flex w-full items-center px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
      <nav
        className={cn(
          'mx-auto flex w-full max-w-7xl items-center justify-between',
          {
            'text-navy': variant === 'default',
            'text-background': variant === 'navy',
          },
        )}
      >
        <Link aria-label="Matt Robillard" href="/">
          <LogoFull className="h-16 w-auto md:h-20" />
        </Link>
        <ul className="flex flex-col items-end gap-2 font-medium uppercase tracking-wider md:gap-4">
          <li>
            <Link href="/writing">Writing</Link>
          </li>
          <li>
            <Link href="/technical">Technical</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
