'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react';

import { getQueryClient } from '@lib/tanstackQuery/client';
import { ThemeProvider } from '@shared/components/Provider/ThemeProvider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  );
}
