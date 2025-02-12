'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

import { getQueryClient } from '@lib/tanstackQuery/client';
import MSWComponent from '@shared/components/Provider/MSWComponent';

export default function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <QueryClientProvider client={getQueryClient()}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        <MSWComponent />
      </QueryClientProvider>
    </NextThemesProvider>
  );
}
