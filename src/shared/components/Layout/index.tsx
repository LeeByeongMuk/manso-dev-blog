import React from 'react';

import Header from '@shared/components/Layout/Header';

// import Footer from '@shared/components/Layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="container mx-auto">{children}</main>
      {/*<Footer />*/}
    </div>
  );
}
