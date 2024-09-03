import React from "react";
import PricingCard from "../_components/pricing-card";

const pricingPlan = [
  {
    name: "Free",
    price: "0",
    features: [
      "20 Aptitude Questions",
      "1 AptSense account",
      "Email support",
      "10 Logic Explanation",
    ],
  },
  {
    name: "premium",
    price: "3",
    features: [
      "50 Aptitude Questions",
      "3 AptSense account",
      "Email Support",
      "100 Logic Explanation per month",
      "24/7 Premium Support",
    ],
  },
  {
    name: "enterprise",
    price: "99",
    features: [
      "Unlimited Aptitude questions",
      "Unlimited AptSense account",
      "Email support",
      "Unlimited Logic Explanation",
      "24/7 Support",
      "Advanced security",
      "Invoice and billing",
    ],
  },
];

function Pricing() {
  return (
    <div className="justify-center flex items-center h-[80dvh]">
      <div className="flex flex-row gap-3">
        {pricingPlan.map((pricing, index) => (
          <PricingCard
            key={index}
            name={pricing.name}
            price={pricing.price}
            features={pricing.features}
          />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
