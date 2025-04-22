'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Wrapper from '../Wrapper';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white rounded-b-2xl px-8 shadow-[0_4px_20px_rgba(94,43,255,0.2)]">
      <Wrapper classname="flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-3xl">
          Team<span className="text-primary">Lessons</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li>
              <Link href="/features" className="text-gray-700 hover:text-primary">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-gray-700 hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/docs" className="text-gray-700 hover:text-primary">
                Docs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/demo">
                <Button label="See a demo" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </Wrapper>

      {/* Mobile Slide-down Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white ${
          menuOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 justify-center">
          <li>
            <Link href="/features" onClick={closeMenu}>
              Features
            </Link>
          </li>
          <li>
            <Link href="/pricing" onClick={closeMenu}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/docs" onClick={closeMenu}>
              Docs
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/demo" onClick={closeMenu}>
              <Button label="See a demo" fullwidth />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
