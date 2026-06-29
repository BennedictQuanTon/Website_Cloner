"use client";

import React from "react";

const steps = [
  {
    num: "01",
    title: "One account, endless sign-in choices",
    desc: "Choose from Google, Apple, GitHub, or create an account with email and passkey.",
    bullets: [
      "Sign in instantly with Google or GitHub.",
      "Create your own secure login credentials.",
      "Connect through your company’s sign-in.",
    ],
  },
  {
    num: "02",
    title: "Choose the Agent You Want to Deploy",
    desc: "From a vast universe of intelligent agents, pick the one that best fits your needs and serves your purpose.",
    bullets: [
      "Choose agents tailored to your specific tasks.",
      "Access universe of pre-built intelligent solutions.",
      "Deploy agents that align with your business goals.",
    ],
  },
  {
    num: "03",
    title: "Prompt or Set to Automation Mode",
    desc: "You can manually guide and adjust the workflow, or let the agent handle everything automatically.",
    bullets: [
      "Prompt the agent and adjust workflows.",
      "Let the agent handle tasks end-to-end.",
      "Switch between manual and automated modes.",
    ],
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
            Workflow
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            3 Steps to Kickstart
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            From setup to measurable success made effortless in three steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Giant Step Number Background */}
              <div className="absolute -top-10 -right-6 text-9xl font-black text-white/[0.02] group-hover:text-white/[0.04] select-none transition-colors duration-300">
                {step.num}
              </div>

              <div>
                {/* Step Indicator */}
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-semibold mb-6">
                  {step.num}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Bullets List */}
              <ul className="space-y-3 pt-6 border-t border-white/5">
                {step.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60 mt-1.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
