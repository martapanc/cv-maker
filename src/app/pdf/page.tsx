'use client';

import React from 'react';
import generatePDF, { Margin, Options, Resolution } from 'react-to-pdf';
import ReactToPrint from 'react-to-print';

import CvDocument from '@/components/cv/Cv';

export default function CvHtmlPage() {
  const componentRef = React.useRef<HTMLDivElement>(null);

  const options: Options = {
    method: 'open',
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.MEDIUM,
    page: {
      margin: Margin.NONE,
      format: 'A4',
      orientation: 'portrait',
    },
    canvas: {
      mimeType: 'image/jpeg',
      qualityRatio: 1,
    },
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      //  pdf: {
      //     compress: true
      //  },
      //  // see https://html2canvas.hertzen.com/configuration for more options
      //  canvas: {
      //     useCORS: true
      //  }
    },
  };

  // const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  const getTargetElement = () => document.getElementById('content-id');

  return (
    <main>
      <section className=' bg-slate-50 '>
        <ReactToPrint
          trigger={() => {
            return <a href='#'>Print</a>;
          }}
          content={() => componentRef.current}
        />

        <button onClick={() => generatePDF(getTargetElement, options)}>
          Generate PDF
        </button>

        <div className='layout min-h-screen py-20'>
          <div id='content-id'>
            <CvDocument />
          </div>
        </div>
      </section>
    </main>
  );
}
