"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Sonic",
    desc: "Access to core AI Agents for smaller teams.",
    priceMonthly: 49,
    priceYearly: 34,
    badge: "300+ teams trusted this",
    cta: "Get Started",
    features: [
      "Access to core AI Agents",
      "Workflow automation for teams",
      "Basic integrations",
      "Standard reporting & analytics",
      "Email support",
      "5,000 AI actions per month",
    ],
    popular: false,
  },
  {
    name: "Supersonic",
    desc: "Go for more power with advanced workflows and high volumes.",
    priceMonthly: 99,
    priceYearly: 69,
    badge: "250+ growing enterprises",
    cta: "Get Started",
    features: [
      "Everything in Sonic plan",
      "Advanced AI Agents for workflows",
      "Priority integrations",
      "Enhanced dashboards",
      "24/7 support via chat",
      "20,000 AI actions per month",
    ],
    popular: true,
  },
  {
    name: "HyperSonic",
    desc: "Unlimited automation with dedicated enterprise support.",
    priceMonthly: "Contact Us",
    priceYearly: "Contact Us",
    badge: "Enterprise grade",
    cta: "Contact Sales",
    features: [
      "Enterprise-grade AI Agent",
      "Full custom API access",
      "Unlimited workflows & automation",
      "Dedicated Customer Success Manager",
      "Custom SLAs & security reviews",
      "Unlimited AI actions",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Flexible Plans for Every Team
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Choose the plan that fits your team and scales with your business.
          </p>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm ${billingPeriod === "monthly" ? "text-white" : "text-white/50"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
              className="relative w-12 h-6 rounded-full bg-white/10 p-1 transition-colors duration-300"
              aria-label="Toggle billing period"
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  billingPeriod === "yearly" ? "translate-x-6" : ""
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${billingPeriod === "yearly" ? "text-white" : "text-white/50"}`}>
                Yearly
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                30% off
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isContact = typeof plan.priceMonthly === "string";
            const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <div
                key={plan.name}
                className={`glass-panel p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? "border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.08)] bg-white/[0.03]"
                    : "border-white/5 bg-white/[0.01] hover:border-white/10"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-500 text-white uppercase tracking-wider">
                    Popular
                  </div>
                )}

                <div>
                  <span className="text-xs font-semibold text-indigo-400 tracking-wide block mb-2">
                    {plan.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-6 min-h-[32px]">
                    {plan.desc}
                  </p>

                  {/* Price display */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {isContact ? price : `$${price}`}
                    </span>
                    {!isContact && (
                      <span className="text-sm text-white/40">/month</span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/5 mb-8" />

                  {/* Features list */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-white/80">
                        <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "btn-primary"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
