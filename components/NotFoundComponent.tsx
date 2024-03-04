import React from 'react';
import Image from 'next/image';
import notFoundLogo from '../public/notFoundLogo.png';

const NotFoundComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={notFoundLogo} alt="Missing Article" className="" />
      <p className="mt-7 text-zinc-800 text-2xl font-bold">No articles found</p>
    </div>
  );
};

export default NotFoundComponent;
