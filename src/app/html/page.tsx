'use client';

import React from 'react';

import CvDocument from '@/components/cv/Cv';

export default function CvHtmlPage() {
  return (
    <main>
      <section>
        <div className='layout min-h-screen py-20'>
          <CvDocument />
        </div>
      </section>
    </main>
  );
}
