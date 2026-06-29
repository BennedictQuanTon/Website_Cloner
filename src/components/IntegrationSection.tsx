"use client";

import React from "react";
import Image from "next/image";

const integrations = [
  { name: "Slack", icon: "/images/EvRpOn9wuYvQYZzCfYwtnS65jRE.svg" },
  { name: "Salesforce", icon: "/images/QaeKao8eibxNDl43Zp0JVaFeI.svg" },
  { name: "SAP", icon: "/images/hdYPy2J7QbpyCYtFC4VUGW13ytI.svg" },
  { name: "Confluence", icon: "/images/FQP31xwbbI4n1vs2r24mfuxRGQI.svg" },
  { name: "Jira", icon: "/images/aap1xSJQbafVrLaeVhlLfdpwNZg.svg" },
  { name: "Google Drive", icon: "/images/DU8DKlxTsbVIEUdhYPL0FdSSqDY.svg" },
];

export default function IntegrationSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Integrations Part */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
              Integration
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              Smart Versatile Agent driven Integration
            </h2>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed">
              Connect custom or pre-built connectors to your enterprise databases, services, and third-party SaaS apps. Activate agentic behaviors across your tool stack.
            </p>
          </div>

          {/* Right Brands Grid */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-6">
            {integrations.map((brand) => (
              <div
                key={brand.name}
                className="glass-panel p-6 rounded-2xl flex items-center justify-center aspect-square group hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={brand.icon}
                    alt={brand.name}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#06070a] shadow-2xl p-12 sm:p-20 text-center flex flex-col items-center">
          {/* Background Grid Image */}
          <div className="absolute inset-0 pointer-events-none opacity-45 z-0">
            <Image
              src="/images/3ez5Goty6KdEzujpWDVyu8Um6Ns.webp"
              alt="CTA background pattern"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Purple Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-transparent to-black pointer-events-none z-10" />

          {/* Card Content */}
          <div className="relative z-20 max-w-2xl flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Step Into COSMOQ <br />
              The Future of Intelligent Agents
            </h2>
            <p className="text-sm sm:text-base text-white/60 mb-10 leading-relaxed max-w-lg">
              Everything your team needs, in one simple workspace. Stay focused, stay in sync, and accelerate operations.
            </p>

            <div>
              <a href="#pricing" className="btn-primary px-8 py-3.5 text-base font-semibold inline-block">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
