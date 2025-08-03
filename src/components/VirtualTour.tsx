'use client';

import { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

export default function VirtualTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      viewerRef.current = new Viewer({
        container: containerRef.current,
        panorama: '/angra.jpg', // place your 360° image in /public
        loadingImg: '/managedoffices.jpg',
        defaultYaw: '130deg',
        navbar: ['zoom', 'fullscreen'],
        touchmoveTwoFingers: true,
      });
    }

    return () => {
      viewerRef.current?.destroy();
    };
  }, []);

  return <div className="w-full h-[500px] rounded-md overflow-hidden" ref={containerRef} />;
}
