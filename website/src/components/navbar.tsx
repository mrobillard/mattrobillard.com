import Link from 'next/link';

import { cn } from '@/lib/cn';
import { LogoFull } from './logo-full';

export function Navbar({
  variant = 'default',
  pathname = 'writing',
}: {
  variant?: 'default' | 'navy';
  pathname?: 'writing' | 'technical' | 'contact';
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
          <li
            data-active={pathname === 'writing'}
            className="after:bg-navy relative flex w-28 items-center justify-end after:absolute after:right-[-1.5rem] after:h-0.5 after:w-4 after:opacity-0 after:transition-opacity hover:after:opacity-100 data-[active=true]:after:opacity-100"
          >
            <Link href="/writing">Writing</Link>
          </li>
          <li
            data-active={pathname === 'technical'}
            className="after:bg-navy relative flex w-28 items-center justify-end after:absolute after:right-[-1.5rem] after:h-0.5 after:w-4 after:opacity-0 after:transition-opacity hover:after:opacity-100 data-[active=true]:after:opacity-100"
          >
            <Link href="/technical">Technical</Link>
          </li>
          <li
            data-active={pathname === 'contact'}
            className="after:bg-navy relative flex w-28 items-center justify-end after:absolute after:right-[-1.5rem] after:h-0.5 after:w-4 after:opacity-0 after:transition-opacity hover:after:opacity-100 data-[active=true]:after:opacity-100"
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
