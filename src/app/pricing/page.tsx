import Card from '@/components/Card';
import Wrapper from '@/components/Wrapper';
import React from 'react';

const Pricing = () => {
  return (
    <Wrapper>
      <div className="min-h-screen">
        Pricing
        <div className="flex flex-col md:flex-row">
          <Card
            title="Starter"
            description="Ideal for individuals and small teams starting out."
            price="$0/month"
            features={[
              'Up to 3 users',
              'Basic support',
              'Access to core features',
              'Community access',
            ]}
          />

          <Card
            title="Pro"
            description="Great for growing teams that need more control."
            price="$29/month"
            features={[
              'Up to 10 users',
              'Priority email support',
              'Advanced analytics',
              'Team collaboration tools',
            ]}
          />

          <Card
            title="Business"
            description="Designed for mid-size teams that need more flexibility."
            price="$79/month"
            features={[
              'Up to 50 users',
              'Dedicated onboarding',
              'Custom branding',
              'Role-based permissions',
            ]}
          />

          <Card
            title="Enterprise"
            description="Custom solutions for large organizations."
            price="Contact us"
            features={[
              'Unlimited users',
              'Dedicated account manager',
              'SLA + 24/7 support',
              'Custom integrations & onboarding',
            ]}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
