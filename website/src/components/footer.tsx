import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/cn';
import { LogoMark } from './logo-mark';

export function Footer({
  variant = 'default',
}: {
  variant?: 'default' | 'navy';
}) {
  return (
    <footer
      className={cn(
        'flex w-full items-center border-t px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16',
        {
          'border-navy': variant === 'default',
          'border-background': variant === 'navy',
        },
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between">
        <form className="w-full max-w-xs lg:max-w-md">
          <div
            className={cn(
              'flex w-full flex-col items-center gap-2 md:items-start',
              {
                'text-navy': variant === 'default',
                'text-background': variant === 'navy',
              },
            )}
          >
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-widest"
            >
              contact@mattrobillard.com
            </label>
            <div
              className={cn('flex h-8 w-full items-center border-b', {
                'border-navy': variant === 'default',
                'border-background': variant === 'navy',
              })}
            >
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Enter email for updates"
                className={cn(
                  'h-full flex-1 grow bg-transparent text-xs tracking-widest outline-none',
                  {
                    'placeholder:text-navy/30y': variant === 'default',
                    'placeholder:text-background/30': variant === 'navy',
                  },
                )}
              />
              <ArrowRight className="h-4 w-4 shrink-0" />
            </div>
          </div>
        </form>
        <div
          className={cn(
            'flex flex-col items-center gap-12 md:flex-row-reverse',
            {
              'text-navy': variant === 'default',
              'text-background': variant === 'navy',
            },
          )}
        >
          <LogoMark className="h-auto w-12" />
          <div className="flex flex-row gap-1 text-xs tracking-widest md:flex-col md:items-end md:gap-2">
            <span>© {new Date().getFullYear()} Matt Robillard.</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
