'use client';

import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';
import React from 'react';

import CvDocument from '@/components/cv/Cv';

export default function CanvasPage() {
  const componentRef = React.useRef<HTMLDivElement>(null);

  function printPDF() {
    html2canvas(componentRef.current!).then((canvas) => {
      const img = canvas.toDataURL('image/png');
      const pdf = new jsPdf();
      pdf.addImage(img, 'JPEG', 0, 0, 200, 564);
      pdf.save('test.pdf');
    });
  }

  return (
    <main>
      <section className=' bg-slate-50 '>
        <button onClick={printPDF}>Render</button>

        <div className='layout min-h-screen py-20'>
          <div ref={componentRef}>
            <CvDocument />
          </div>
        </div>
      </section>
    </main>
  );
}
