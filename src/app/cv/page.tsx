'use client';

import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';

import CvDocument from '@/components/cv/Cv';

export default function CvPage() {
  return (
    <main>
      <section>
        <div className='layout min-h-screen py-20'>
          <PDFViewer className='h-screen w-full'>
            <CvDocument />
          </PDFViewer>
        </div>
      </section>
    </main>
  );
}
