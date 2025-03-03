import Link from 'next/link';

import { LogoFull } from './logo-full';

export function Navbar({
  variant = 'default',
  pathname = 'writing',
}: {
  variant?: 'default' | 'navy';
  pathname?: 'writing' | 'technical' | 'contact';
}) {
  return (
    <header
      data-variant={variant}
      className="bg-background data-[variant=navy]:bg-navy flex w-full items-center px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16"
    >
      <nav
        data-variant={variant}
        className="text-navy data-[variant=navy]:text-background mx-auto flex w-full max-w-7xl items-center justify-between pr-6"
      >
        <Link aria-label="Matt Robillard" href="/">
          <LogoFull className="h-16 w-auto md:h-20" />
        </Link>
        <ul className="flex flex-col items-end gap-2 font-medium uppercase tracking-wider md:gap-4">
          <li>
            <Link
              href="/writing"
              data-active={pathname === 'writing'}
              className="after:bg-navy relative inline-flex w-28 items-center justify-end after:absolute after:right-[-1.5rem] after:h-0.5 after:w-4 after:opacity-0 after:transition-opacity hover:after:opacity-100 focus-visible:outline-none focus-visible:after:opacity-100 data-[active=true]:after:opacity-100"
            >
              Writing
            </Link>
          </li>
          <li>
            <Link
              href="/technical"
              data-active={pathname === 'technical'}
              className="after:bg-navy relative inline-flex w-28 items-center justify-end after:absolute after:right-[-1.5rem] after:h-0.5 after:w-4 after:opacity-0 after:transition-opacity hover:after:opacity-100 focus-visible:outline-none focus-visible:after:opacity-100 data-[active=true]:after:opacity-100"
            >
              Technical
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              data-active={pathname === 'contact'}
              className="after:bg-navy relative inline-flex w-28 items-center justify-end after:absolute after:right-[-1.5rem] after:h-0.5 after:w-4 after:opacity-0 after:transition-opacity hover:after:opacity-100 focus-visible:outline-none focus-visible:after:opacity-100 data-[active=true]:after:opacity-100"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
