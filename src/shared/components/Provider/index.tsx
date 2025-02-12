'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

import { getQueryClient } from '@lib/tanstackQuery/client';
import MSWComponent from '@shared/components/Provider/MSWComponent';
import { ThemeProvider } from '@shared/components/Provider/ThemeProvider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={getQueryClient()}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        <MSWComponent />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
