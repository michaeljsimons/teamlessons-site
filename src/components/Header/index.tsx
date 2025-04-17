import React from 'react';
import Wrapper from '../Wrapper';
import Button from '../ui/Button';

const Header = () => {
  return (
    <div>
      <Wrapper classname="flex items-center justify-between px-8 py-4">
        <p className="font-bold text-3xl">
          <span className="text-primary">Team</span>Lessons
        </p>

        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <a href="#features" className="text-gray-700 hover:text-primary">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-700 hover:text-primary">
                Pricing
              </a>
            </li>
            <li>
              <a href="#docs" className="text-gray-700 hover:text-primary">
                Docs
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-primary">
                Contact
              </a>
            </li>
            <li>
              <Button label="See a demo" />
            </li>
          </ul>
        </nav>
      </Wrapper>
    </div>
  );
};

export default Header;
