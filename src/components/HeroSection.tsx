"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const partners = [
  { name: "Partner 1", logo: "/images/eTOvR4ZuGGQENAaE3zs5ZqZxtks.png" },
  { name: "Partner 2", logo: "/images/QvWxQDGRcrTJWGZp7OsUlI4k6w0.png" },
  { name: "Partner 3", logo: "/images/ZrGThO8Gp1y7Hoki1Dmhr0Flw6U.png" },
  { name: "Partner 4", logo: "/images/dTohPdySQSHpfv4TUIdRVoRdHBw.png" },
  { name: "Partner 5", logo: "/images/WzG2yfwdF7vdqrjvFu4j7tyJ3Gs.png" },
  { name: "Partner 6", logo: "/images/FkPCvWLJEloyx0AnJETPfPfMx4.png" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Auto-play prevented by browser policy", err);
      });
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute top-[10%] left-[35%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6 animate-fade-in shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.05)]">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-ping" />
          <span className="text-xs font-medium text-white/80 tracking-wide">
            Beta Version is launching on 12th September
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
          Next-generation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-blue-400">
            AI Agents
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-white/70 max-w-2xl font-normal leading-relaxed mb-10">
          Accelerate the speed of businesses with the COSMOQ platform and our AI solutions.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a href="#pricing" className="btn-primary px-8 py-3.5 text-base font-semibold min-w-[160px]">
            Get Started
          </a>
        </div>
      </div>

      {/* Video Demonstration Mockup */}
      <div className="w-full max-w-5xl px-6 mb-20 relative">
        <div className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl">
          {/* Inner bezel wrapper */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-black">
            <video
              ref={videoRef}
              src="/images/XyQKBChh8CZBaaXrJoxPbwvI.mp4"
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Grain/noise overlay & Frost overlay */}
            <div className="absolute inset-0 pointer-events-none bg-black/[0.05]" />
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-15" 
                 style={{ backgroundImage: "url(/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png)", backgroundSize: "128px" }} />
          </div>
        </div>

        {/* Side glows behind video */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-[80px] -z-10" />
      </div>

      {/* Infinite Scrolling Logos */}
      <div className="w-full max-w-7xl mx-auto px-6 overflow-hidden py-10 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <p className="text-center text-xs font-semibold text-white/40 uppercase tracking-widest mb-8">
          Empowering the world&apos;s most innovative teams
        </p>

        {/* Marquee Track */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-16 pr-16">
            {partners.concat(partners).map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-36 h-10 relative grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="150px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
