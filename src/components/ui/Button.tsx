import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition duration-300">
      {label || 'Get Started'}
    </button>
  );
};

export default Button;
