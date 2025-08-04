// app/ClientLayout.tsx
'use client';

import React, { useEffect, useState } from 'react';
import DomLoader from '@/components/DomLoader';
import MouseFollower from '@/components/MouseFollower';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookToorModal from '@/components/BookToorModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTourModalOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loadingComplete ? (
        <DomLoader onComplete={() => setLoadingComplete(true)} />
      ) : (
        <>
          <MouseFollower />
          <Navbar onBookTourClick={() => setIsTourModalOpen(true)} />
          <BookToorModal isOpen={isTourModalOpen} setIsOpen={setIsTourModalOpen} />
          <main className="pt-2">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
