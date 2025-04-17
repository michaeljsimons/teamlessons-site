import React from 'react';
import Image from 'next/image';
import Wrapper from '../Wrapper';

const Hero = () => {
  return (
    <Wrapper classname="flex flex-row min-h-200 justify-center items-center px-16 py-20">
      <div className="max-w-2xl">
        <p className="font-bold text-6xl leading-tight">
          The Easiest Way to Keep Lessons Learned in Front of Your Team in{' '}
          <span className="text-secondary">Teams</span>
        </p>
      </div>
      <div className="ml-10 w-1/2">
        <Image
          src="/teams-icon.png"
          alt="Teams Icon"
          width={400}
          height={400}
          className="w-full h-auto max-w-50"
        />
      </div>
    </Wrapper>
  );
};

export default Hero;
