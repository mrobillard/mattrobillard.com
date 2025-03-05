'use client';

import { Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useTransition } from 'react';

import type { Tag } from '@/server/types';

export function TagButton({ tag }: { tag: Tag }) {
  const params = useSearchParams();
  const { push } = useRouter();
  const [transition, startTransition] = useTransition();

  const active = useMemo(() => {
    return (params.get('tags')?.split(';') ?? []).includes(tag.slug);
  }, [params, tag.slug]);

  const handleClick = useCallback(() => {
    const newParams = new URLSearchParams(params);
    const selectedTags = newParams.get('tags')?.split(';') ?? [];
    const index = selectedTags.indexOf(tag.slug);

    // toggle tag
    if (index === -1) {
      selectedTags.push(tag.slug);
    } else {
      selectedTags.splice(index, 1);
    }

    // set query params
    if (selectedTags.length === 0) {
      newParams.delete('tags');
    } else {
      newParams.set('tags', selectedTags.join(';'));
    }

    startTransition(() => push(`?${newParams}`));
  }, [params, tag.slug, push]);

  return (
    <button
      key={tag.slug}
      data-active={active}
      onClick={handleClick}
      className="hover:bg-navy data-[active=true]:bg-navy focus-visible:bg-navy relative inline-flex h-7 items-center justify-center overflow-hidden rounded border border-current px-3 py-1 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none data-[active=true]:text-white"
    >
      <span data-loading={transition} className="data-[loading=true]:opacity-0">
        {tag.title}
      </span>
      <Loader2
        data-loading={transition}
        className="absolute hidden h-3 w-3 animate-spin data-[loading=true]:block"
      />
    </button>
  );
}
