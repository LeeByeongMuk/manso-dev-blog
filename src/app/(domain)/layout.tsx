import type { Metadata } from 'next';
import React from 'react';

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
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
