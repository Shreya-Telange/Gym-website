import React, { useState } from "react";
import "./Pricing.css";

const pricingData = {
  monthly: [
    {
      id: 1,
      name: "Basic Plan",
      price: "$29",
      features: [
        "Access to gym equipment",
        "1 group class per week",
        "Locker room access",
      ],
      popular: false,
      description: "Great for beginners who want to start their fitness journey.",
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "$49",
      features: [
        "Unlimited access to gym equipment",
        "5 group classes per week",
        "Personal trainer sessions",
      ],
      popular: true,
      description: "Perfect for regular gym-goers looking for more flexibility.",
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$79",
      features: [
        "All Standard Plan features",
        "Personal nutrition plan",
        "Sauna and spa access",
      ],
      popular: false,
      description: "Ideal for those who want a comprehensive fitness experience.",
    },
  ],
  yearly: [
    {
      id: 1,
      name: "Basic Plan",
      price: "$299",
      features: [
        "Access to gym equipment",
        "1 group class per week",
        "Locker room access",
      ],
      popular: false,
      description: "Great for beginners who want to start their fitness journey.",
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "$499",
      features: [
        "Unlimited access to gym equipment",
        "5 group classes per week",
        "Personal trainer sessions",
      ],
      popular: true,
      description: "Perfect for regular gym-goers looking for more flexibility.",
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$799",
      features: [
        "All Standard Plan features",
        "Personal nutrition plan",
        "Sauna and spa access",
      ],
      popular: false,
      description: "Ideal for those who want a comprehensive fitness experience.",
    },
  ],
};

const Pricing = () => {
  const [planType, setPlanType] = useState("monthly");
  const [expandedCard, setExpandedCard] = useState(null);

  const togglePlanType = () => {
    setPlanType(planType === "monthly" ? "yearly" : "monthly");
  };

  const handleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

 
const handleJoinNow = (planName) => {
  // Redirect to the sign-up page with the selected plan as a query parameter
  history.push(`/signup?plan=${planName}`);
};

  return (
    <section className="pricing-section" id="pricing">
      <h2>Choose Your Plan</h2>

      <div className="plan-toggle">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" onChange={togglePlanType} />
          <span className="slider"></span>
        </label>
        <span>Yearly</span>
      </div>

      <div className="pricing-grid">
        {pricingData[planType].map((plan) => (
          <div
            className={`pricing-card ${plan.popular ? "popular-plan" : ""}`}
            key={plan.id}
            onClick={() => handleExpand(plan.id)}
          >
            {/* {plan.popular && <div className="badge">Most Popular</div>} */}
            <h3>{plan.name}</h3>
            <p className="price">
              {plan.price} <span>{planType === "monthly" ? "/mo" : "/yr"}</span>
            </p>
            <p className="plan-description">{plan.description}</p>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {expandedCard === plan.id && (
              <div className="expanded-features">
                <h4>Plan Features</h4>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className="cta-button"
              onClick={() => handleJoinNow(plan.name)}
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
