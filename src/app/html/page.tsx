'use client';

import React from 'react';
import ReactToPrint from 'react-to-print';

import CvDocument from '@/components/cv/Cv';

export default function CvHtmlPage() {
  const componentRef = React.useRef<HTMLDivElement>(null);

  return (
    <main>
      <section className=' bg-slate-50 '>
        <ReactToPrint
          trigger={() => {
            return <a href='#'>Print this</a>;
          }}
          content={() => componentRef.current}
        />

        <div className='layout min-h-screen py-20'>
          <div ref={componentRef}>
            <CvDocument />
          </div>
        </div>
      </section>
    </main>
  );
}
