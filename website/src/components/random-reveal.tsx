'use client';

import { forwardRef, HTMLAttributes, useEffect } from 'react';

import { cn } from '@/lib/cn';
import { TextDecodeAnimation } from '@/lib/randomize';

export const RandomReveal = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  useEffect(() => {
    TextDecodeAnimation.init(100);

    const interval = setInterval(() => TextDecodeAnimation.reset(), 5000);

    return () => {
      clearInterval(interval);
      TextDecodeAnimation.destroy();
    };
  }, []);

  return (
    <span {...props} ref={ref} className={cn(className, 'text-decode-effect')}>
      {children}
    </span>
  );
});

RandomReveal.displayName = 'RandomReveal';
