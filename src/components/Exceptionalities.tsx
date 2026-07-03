"use client";

import React from "react";
import Image from "next/image";

const items = [
  {
    id: "speed",
    title: "Speed",
    desc: "Faster time-to-value with our enterprise AI solutions and AI agent marketplace.",
    image: "/images/AroYsG98cecxdfVar1RpE3QmpjY.webp",
    span: "col-span-6 lg:col-span-3",
    imageSize: "w-full h-[220px] sm:h-[260px] md:h-[300px]",
  },
  {
    id: "deep-capabilities",
    title: "Deep capabilites",
    desc: "An agent platform with the depth to adapt to every interaction, workflow, behavior, and enterprise.",
    image: null,
    span: "col-span-6 lg:col-span-3",
    bgStyle: "bg-gradient-to-br from-[#0c0f16]/60 to-[#1e1b4b]/20",
  },
  {
    id: "control",
    title: "Control",
    desc: "The power of a standardized platform built for the demands.",
    image: "/images/UoZeXgrLVIo07yWMmdM4MO8F0.webp",
    span: "col-span-6 md:col-span-3 lg:col-span-3",
    imageSize: "w-full h-[220px] sm:h-[260px]",
  },
  {
    id: "flexibility",
    title: "Flexibility",
    desc: "Our design approach is ecosystem agnostic, allowing you to choose .C",
    image: "/images/TdhDQYxz25yRgOwLKeC05FZVk.webp",
    span: "col-span-6 md:col-span-3 lg:col-span-3",
    imageSize: "w-full h-[220px] sm:h-[260px]",
    badgeIcon: "/images/hdYPy2J7QbpyCYtFC4VUGW13ytI.svg",
  },
];

export default function Exceptionalities() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
            Exceptionalities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            What sets COSMOQ apart
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Smarter, faster, and more adaptive than traditional AI solutions.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-6 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className={`${item.span} glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col relative group`}
            >
              {/* Inner card content wrapper */}
              <div className="p-8 flex flex-col justify-between flex-grow z-10">
                <div className="max-w-sm mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* If card has a badge icon (like Flexibility) */}
                {item.badgeIcon && (
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Image
                      src={item.badgeIcon}
                      alt="Badge Icon"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Card visual elements */}
              {item.image ? (
                <div className={`relative ${item.imageSize} mt-auto overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                  {/* Subtle shadow overlay on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent opacity-80" />
                </div>
              ) : (
                // Solid card bg for Deep Capabilities
                <div className={`absolute inset-0 ${item.bgStyle} pointer-events-none -z-10`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
