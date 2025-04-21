import React from 'react';
import Wrapper from '../Wrapper';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-secondary rounded-t-2xl flex flex-row py-8">
      <Wrapper classname="w-full">
        <p className="text-white text-xl font-semibold mb-6">TeamLessons</p>

        <div className="flex flex-col w-full gap-8 sm:gap-0 sm:flex-row flex-wrap justify-between items-start ">
          {/* Product */}
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <Link href="/features" className="text-secondary font-bold">
                Product
              </Link>
            </li>
            <li>
              <Link href="/features" className="text-white">
                Features
              </Link>
            </li>
            <li>
              <a href="#" className="text-white">
                Case Study
              </a>
            </li>
            <li>
              <Link href="/pricing" className="text-white">
                Pricing
              </Link>
            </li>
          </ul>

          {/* Company */}
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <Link href="/about" className="text-secondary font-bold">
                Company
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>

          {/* Sales */}
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <a href="#" className="text-secondary font-bold">
                Sales
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Free Trial
              </a>
            </li>
            <li>
              <Link href="/pricing" className="text-white">
                Enterprise
              </Link>
            </li>
          </ul>

          {/* Help */}
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <Link href="/contact" className="text-secondary font-bold">
                Help
              </Link>
            </li>
            <li>
              <a href="#" className="text-white">
                Docs
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
