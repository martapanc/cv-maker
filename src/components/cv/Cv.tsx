import clsx from 'clsx';
import React from 'react';

import * as data from '@/data/data.json';

import Body from '@/components/cv/sections/Body';
import Header from '@/components/cv/sections/Header';
import Sidebar from '@/components/cv/sections/Sidebar';

const CvDocument = () => {
  const { header, body, sidebar } = data;

  const onePageHeight = 1555;
  // const width = 1099.5510447451;
  const width = 1105;
  // const headerHeight = 230;

  return (
    <div
      className={clsx(
        `h-[${onePageHeight * 2}px]`,
        `w-[${width}px]`,
        'bg-white',
      )}
    >
      <Header {...header} />

      <div className={clsx('flex', `h-[${onePageHeight * 2}px]`)}>
        <Body {...body} />
        <Sidebar {...sidebar} />
      </div>
    </div>
  );
};

export default CvDocument;
