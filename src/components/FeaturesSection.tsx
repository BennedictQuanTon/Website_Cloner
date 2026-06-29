"use client";

import React, { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "usage",
    label: "Usage",
    title: "AI Agent for work",
    desc: "Connect to your business systems, understand your data and workflows, and activate agentic capabilities.",
    tags: ["Healthcare", "Tech Assistance", "Support", "Marketer"],
    image: "/images/DKhCP3xiqB8m3zBp2E6ysooT3SY.webp",
  },
  {
    id: "technology",
    label: "Technology",
    title: "Alpha Technology",
    desc: "Create valuable AI agents and agentic workflows with confidence and ongoing control using advanced neural configurations.",
    tags: ["Multi-Agent", "Latest Model", "Dialog", "GPT"],
    image: "/images/4ABnXaFshXBVkaMyEU2NjeeqE.webp",
  },
  {
    id: "data",
    label: "Data",
    title: "Enterprise data sources",
    desc: "Our design approach is ecosystem agnostic, allowing you to choose how you connect, index, and query your secure enterprise knowledge.",
    tags: ["SharePoint", "SAP", "Slack", "Google Workspace", "Confluence"],
    image: "/images/DKhCP3xiqB8m3zBp2E6ysooT3SY.webp", // Fallback or shares similar visual
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("usage");
  const activeData = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            All-in-one AI for enterprise
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Simplify, accelerate, and transform with one connected AI ecosystem.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.05)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-black shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4 transition-all duration-300">
              {activeData.title}
            </h3>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-8">
              {activeData.desc}
            </p>

            {/* List tags */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {activeData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a href="#contact" className="btn-secondary px-6 py-2.5 text-sm font-semibold inline-block">
                See Uses
              </a>
            </div>
          </div>

          {/* Right Mockup Showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl transition-all duration-500 ease-in-out hover:border-white/15">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black/40">
                <Image
                  src={activeData.image}
                  alt={activeData.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
