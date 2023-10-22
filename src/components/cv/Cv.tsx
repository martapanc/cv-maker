import React from 'react';

import Body from '@/components/cv/sections/Body';
import Header from '@/components/cv/sections/Header';
import Sidebar from '@/components/cv/sections/Sidebar';

const CvDocument = () => {
  return (
    <div className='h-[1555px] w-[1100px] bg-white'>
      <Header />

      <div className='flex h-[1325px]'>
        <Body />
        <Sidebar />
      </div>
    </div>
  );
};

export default CvDocument;
