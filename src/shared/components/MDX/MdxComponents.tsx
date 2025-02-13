import React from 'react';

import { cn } from '@lib/utils';

export const MdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      {...props}
      className={cn('mb-4 text-4xl font-bold text-foreground', props.className)}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className={cn('mb-3 text-3xl font-bold text-foreground', props.className)}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className={cn('mb-2 text-2xl font-bold text-foreground', props.className)}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      className={cn('mb-4 text-base text-foreground', props.className)}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      {...props}
      className={cn(
        'border-l-4 border-primary pl-4 italic text-muted-foreground',
        props.className
      )}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      {...props}
      className={cn(
        'bg-muted px-1 py-0.5 rounded text-sm font-mono',
        props.className
      )}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLElement>) => (
    <pre
      {...props}
      className={cn(
        'mb-4 overflow-x-auto rounded bg-muted p-4 text-sm',
        props.className
      )}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className={cn(
        'text-primary underline hover:text-primary-foreground',
        props.className
      )}
    />
  ),
  // 추가적인 태그도 필요에 따라 오버라이드 가능
};
