import React from 'react';
import Image from 'next/image';
import Wrapper from '../Wrapper';

const Hero = () => {
  return (
    <Wrapper classname="flex flex-col items-center justify-center py-20">
      <div className="flex flex-row items-center justify-center">
        <p className="font-bold text-3xl lg:text-6xl leading-tight w-1/2">
          The Ultimate Way to Track <span className="text-secondary">Lessons Learnt</span> inside
          Microsoft <span className="text-secondary">Teams</span>
        </p>

        <div className="ml-10">
          <Image
            src="/teams-icon.png"
            alt="Microsoft Teams icon"
            width={400}
            height={400}
            className="w-full h-auto max-w-50"
          />
        </div>
      </div>
      <Image
        src="/laptop.png"
        alt="Video Demo of Team Lessons"
        width={1000}
        height={1000}
        className="w-full h-auto max-w-full md:max-w-2/3 py-20"
      />
    </Wrapper>
  );
};

export default Hero;
