// app/ClientLayout.tsx
'use client';

import React, { useState } from 'react';
import DomLoader from '@/components/DomLoader';
import MouseFollower from '@/components/MouseFollower';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete ? (
        <DomLoader onComplete={() => setLoadingComplete(true)} />
      ) : (
        <>
          <MouseFollower />
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
