'use client';

import Card from '@/components/Card';
import Wrapper from '@/components/Wrapper';
import React, { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      title: 'Free',
      description: 'Ideal for individuals and small teams starting out.',
      monthly: '$0/month',
      annual: '$0/year',
      features: ['Up to 3 users', 'Basic support', 'Access to core features', 'Community access'],
    },
    {
      title: 'Standard',
      description: 'Great for growing teams that need more control.',
      monthly: '$100/month',
      annual: '$1,000/year',
      features: [
        'Up to 10 users',
        'Priority email support',
        'Advanced analytics',
        'Team collaboration tools',
      ],
    },
    {
      title: 'Premium',
      description: 'Powerful features for high-performing teams.',
      monthly: '$300/month',
      annual: '$3,000/year',
      features: [
        'Up to 25 users',
        'Priority email + chat support',
        'Advanced analytics',
        'Team collaboration tools',
      ],
    },
    {
      title: 'Enterprise',
      description: 'Custom solutions for large organizations.',
      monthly: 'Contact us',
      annual: 'Contact us',
      features: [
        'Unlimited users',
        'Dedicated account manager',
        'SLA + 24/7 support',
        'Custom integrations & onboarding',
      ],
    },
  ];

  return (
    <Wrapper>
      <div className="min-h-screen flex flex-col items-center py-16 gap-6">
        <div className="text-center">
          <p className="text-2xl font-semibold text-primary">Per Team</p>
          <h1 className="text-5xl font-bold mt-2 mb-2">Pricing</h1>
          <p className="text-lg text-gray-600">Flexible to how you do business</p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-4 mt-8">
          <span className="text-sm font-medium text-gray-700">Monthly</span>
          <div
            className={`w-14 h-8 flex items-center bg-primary rounded-full p-1 cursor-pointer transition`}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                isAnnual ? 'translate-x-6' : ''
              }`}
            />
          </div>
          <span className="text-sm font-medium text-gray-700">Annually (Save ~17%)</span>
        </div>

        {/* Cards */}
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              title={plan.title}
              description={plan.description}
              price={isAnnual ? plan.annual : plan.monthly}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
