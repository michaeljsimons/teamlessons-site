'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Wrapper from '../Wrapper';
import Button from '../ui/Button';

const GRID_SPACING = 30;

type Dot = {
  left: number;
  top: number;
  delay: number;
};

const Hero = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generateGlowingDots = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const cols = Math.floor(width / GRID_SPACING);
      const rows = Math.floor(height / GRID_SPACING);

      const newDots: Dot[] = [];

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          if (Math.random() < 0.15) {
            newDots.push({
              left: x * GRID_SPACING,
              top: y * GRID_SPACING,
              delay: Math.random() * 5,
            });
          }
        }
      }

      setDots(newDots);
    };

    generateGlowingDots();
    window.addEventListener('resize', generateGlowingDots);
    return () => window.removeEventListener('resize', generateGlowingDots);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Static dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'radial-gradient(circle, rgba(94,43,255,1) 1px, transparent 1px)',
          backgroundSize: `${GRID_SPACING}px ${GRID_SPACING}px`,
          filter: 'drop-shadow(0 0 2px #9381FF)',
        }}
      />

      {/* Random glowing dots aligned to grid */}
      {dots.map((dot, index) => (
        <span
          key={index}
          style={{
            position: 'absolute',
            top: `${dot.top}px`,
            left: `${dot.left}px`,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: '#5E2BFF',
            filter: 'drop-shadow(0 0 10px #9381FF)',
            opacity: 0,
            animation: `glow 1s ease-in-out ${dot.delay}s infinite`,
            zIndex: 1,
          }}
        />
      ))}

      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Wrapper classname="flex flex-col items-center justify-center py-20">
          <div className="flex flex-col items-center justify-center gap-10 text-center lg:text-left">
            <p
              className="text-text-cta font-bold text-3xl lg:text-6xl"
              style={{
                textShadow: '0px 4px 50px rgba(147, 129, 255, 0.8)',
              }}
            >
              Capture what Matters in Teams
            </p>
            <p className="text-text-primary text-xl lg:text-3xl w-3/4 text-center">
              Lessons learnt made visible, trackable, and actionable right inside Microsoft{' '}
              <span className="font-bold text-text-secondary">Teams</span>
            </p>
            <Button fullwidth={false} />
          </div>

          <Image
            src="/laptop.png"
            alt="TeamLessons video preview"
            width={1000}
            height={1000}
            className="w-full h-auto max-w-full py-20"
          />
        </Wrapper>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes glow {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
