'use client';

import { cn } from '@/lib/cn';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { forwardRef } from 'react';

export type BackButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = forwardRef<HTMLButtonElement, BackButtonProps>(
  ({ className, children, ...props }, ref) => {
    const { back } = useRouter();

    return (
      <button
        {...props}
        ref={ref}
        onClick={back}
        className={cn(
          'group inline-flex items-center gap-2 font-semibold uppercase tracking-widest focus-visible:outline-none',
          className,
        )}
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-focus-visible:-translate-x-1" />
        <span>{children}</span>
      </button>
    );
  },
);

BackButton.displayName = 'BackButton';
