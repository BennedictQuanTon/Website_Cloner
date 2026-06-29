"use client";

import React, { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: "process-automation",
    name: "Process Automation",
    title: "Streamline complex workflows",
    desc: "Streamline complex workflows with intelligent AI agents that enhance efficiency, accuracy, and speed across your enterprise.",
    features: [
      "Automate Tasks — Reduce manual effort",
      "Optimize Workflows — Boost productivity",
      "Stay Compliant — Ensure accuracy",
    ],
    image: "/images/7vqU2Ppdy0G0UGP9mrAcNuH6Lo.png",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Boost sales with smart automation tools",
    desc: "Deploy specialized healthcare and sales agents to handle patient triage, data ingestion, and scheduling compliance automatically.",
    features: [
      "Patient Triage — Handle initial queries",
      "Compliance Guard — Ensure data privacy",
      "Secure Integrations — Connect with EHRs",
    ],
    image: "/images/PEUUUxYckhxt8G82fn4Y0LPz5s.png",
  },
  {
    id: "marketing",
    name: "Marketing",
    title: "Optimize campaigns with intelligent automation",
    desc: "Enhance your marketing workflow by deploying agents that generate copy, track KPIs, run search optimization, and manage assets.",
    features: [
      "Copy Generation — Write high-converting ads",
      "SEO Analysis — Track organic rankings",
      "Asset Management — Optimize marketing files",
    ],
    image: "/images/7vqU2Ppdy0G0UGP9mrAcNuH6Lo.png",
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    title: "Accelerate catalog operations and user support",
    desc: "Improve conversion rates, automate catalog updates, manage inventory feeds, and handle support queries end-to-end.",
    features: [
      "Catalog Updates — Sync inventory instantly",
      "Smart Support — Solve issues on autopilot",
      "Order Tracking — Keep customers notified",
    ],
    image: "/images/PEUUUxYckhxt8G82fn4Y0LPz5s.png",
  },
  {
    id: "development",
    name: "Development",
    title: "Accelerate coding and improve workflows",
    desc: "Supercharge your development lifecycle. Deploy code agents to perform automated review, linting, test writing, and bug hunting.",
    features: [
      "Automated Review — Catch bugs before merge",
      "Unit Tests — Generate tests in real time",
      "Continuous Integration — Streamline deployments",
    ],
    image: "/images/PEUUUxYckhxt8G82fn4Y0LPz5s.png",
  },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("process-automation");
  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
            Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Covers all major verticals
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Deploy intelligence across your entire business lifecycle with zero friction.
          </p>
        </div>

        {/* Layout: Left vertical tabs, Right mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Vertical Tab Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {products.map((p) => {
              const isActive = p.id === activeTab;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-white/[0.04] border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.05)]"
                      : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <span className={`text-base font-semibold block mb-1 ${isActive ? "text-white" : "text-white/80"}`}>
                    {p.name}
                  </span>
                  {isActive && (
                    <p className="text-xs text-white/50 leading-relaxed transition-all duration-300">
                      {p.title}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Selected Product Display */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="glass-panel p-8 rounded-3xl mb-8 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {activeProduct.title}
                </h3>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6">
                  {activeProduct.desc}
                </p>

                {/* Sub features checklist */}
                <ul className="space-y-3 mb-8">
                  {activeProduct.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup Frame */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black/30 border border-white/5 shadow-inner">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
