'use client';

import { cn } from '@/lib/cn';
import { TextDecodeAnimation } from '@/lib/randomize';
import { forwardRef, HTMLAttributes, useEffect } from 'react';

export const RandomReveal = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  useEffect(() => {
    TextDecodeAnimation.init(300);
    return () => TextDecodeAnimation.destroy();
  }, []);
  return (
    <span {...props} ref={ref} className={cn(className, 'text-decode-effect')}>
      {children}
    </span>
  );
});

RandomReveal.displayName = 'RandomReveal';
