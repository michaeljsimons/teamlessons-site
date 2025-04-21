import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  style?: string;
  fullwidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, style, fullwidth = true }) => {
  return (
    <button
      className={`bg-primary text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-primary-dark hover:scale-102 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 hover:cursor-pointer ${
        fullwidth ? 'w-full' : ''
      } 
        ${style}`}
      onClick={onClick}
    >
      {label || 'Get Started'}
    </button>
  );
};

export default Button;
