import type { Metadata } from 'next';
import React, { Suspense } from 'react';

import Layout from '@shared/components/Layout';
import Provider from '@shared/components/Provider';

import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'next-starter-kit',
  description: 'next js boilerplate with laravel boilerplate api',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <Layout>{children}</Layout>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
