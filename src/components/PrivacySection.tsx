"use client";

import React from "react";
import Image from "next/image";

const pillars = [
  {
    title: "Intelligent Protection",
    desc: "End-to-end encryption for all enterprise data in transit and at rest, guarding sensitive knowledge bases.",
  },
  {
    title: "Real-Time Threat Detection",
    desc: "Active behavior monitoring automatically flags anomalies and suspicious queries before they reach execution.",
  },
  {
    title: "Seamless Compliance",
    desc: "Pre-built audits and SOC2 readiness ensure security policies align with top global enterprise standards.",
  },
];

export default function PrivacySection() {
  return (
    <section id="privacy" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
              Data and Privacy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Multi-Layer Security
            </h2>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-10">
              Protect your enterprise with multi-layered AI security. From data encryption to behavior monitoring, every layer works together.
            </p>

            {/* Security Pillars List */}
            <div className="space-y-6">
              {pillars.map((p, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center text-xs font-semibold text-indigo-400 flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-white/55 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mockup Showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden glass-panel p-2.5 shadow-2xl border border-white/5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/40">
                <Image
                  src="/images/i8sq3FWUDAbUH2kTIeqGIMeGrwE.webp"
                  alt="Security Dashboard Mockup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center hover:scale-[1.015] transition-transform duration-500"
                />
              </div>

              {/* Side badge illustrations */}
              <div className="absolute bottom-6 right-6 w-48 h-auto glass-panel p-3 rounded-xl border border-white/10 shadow-lg hidden sm:block animate-pulse duration-[4000ms]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-semibold text-white/90">Compliance Active</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-emerald-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
