import React from 'react';
import Wrapper from '../Wrapper';

const Footer = () => {
  return (
    <div className="bg-secondary rounded-t-2xl flex flex-row py-8">
      <Wrapper>
        <p className="text-white text-sm sm:text-base md:text-lg font-semibold mb-6">TeamLessons</p>

        <div className="flex flex-row flex-wrap justify-between items-start gap-10 sm:gap-16 md:gap-24">
          {/* Product */}
          <ul className="flex flex-col gap-1 text-sm sm:text-base">
            <li>
              <a href="#" className="text-secondary font-bold text-base sm:text-lg md:text-xl">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Case Study
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Pricing
              </a>
            </li>
          </ul>

          {/* Company */}
          <ul className="flex flex-col gap-1 text-sm sm:text-base">
            <li>
              <a href="#" className="text-secondary font-bold text-base sm:text-lg md:text-xl">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
          </ul>

          {/* Sales */}
          <ul className="flex flex-col gap-1 text-sm sm:text-base">
            <li>
              <a href="#" className="text-secondary font-bold text-base sm:text-lg md:text-xl">
                Sales
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Free Trial
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Enterprise
              </a>
            </li>
          </ul>

          {/* Help */}
          <ul className="flex flex-col gap-1 text-sm sm:text-base">
            <li>
              <a href="#" className="text-secondary font-bold text-base sm:text-lg md:text-xl">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Support
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
