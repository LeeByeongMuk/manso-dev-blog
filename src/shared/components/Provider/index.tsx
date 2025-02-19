'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import React from 'react';

import { getQueryClient } from '@lib/tanstackQuery/client';
import MSWComponent from '@shared/components/Provider/MSWComponent';
import { ThemeProvider } from '@shared/components/Provider/ThemeProvider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      <ReactQueryStreamedHydration>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
          <MSWComponent />
        </ThemeProvider>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
