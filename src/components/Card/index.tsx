import React from 'react';

interface CardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const Card: React.FC<CardProps> = ({ title, description, price, features }) => {
  return (
    <div className="border-2 border-gray-300 rounded-2xl p-6 w-full md:w-1/3 shadow-md hover:shadow-lg transition duration-300 bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-3xl font-bold mb-6">{price}</div>
      <ul className="mb-6 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-700 flex items-center">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Card;
