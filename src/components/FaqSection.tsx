"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is COSMOQ?",
    a: "COSMOQ is a next-generation AI agent platform designed for modern enterprises. It allows companies to deploy intelligent, autonomous agents that connect to business systems, understand workflows, and execute complex operations with minimal oversight.",
  },
  {
    q: "How are AI Agents different from automation tools?",
    a: "Traditional automation relies on hard-coded rules and triggers. AI agents use large language models and neural workflows to reason, adapt, handle edge cases, and learn from interactions, enabling them to automate complex, unstructured tasks.",
  },
  {
    q: "Can COSMOQ integrate with our existing systems?",
    a: "Yes, COSMOQ features robust integration support. Out of the box, it connects with popular enterprise systems including Slack, SharePoint, SAP, Confluence, GitHub, Google Workspace, and offers custom API access for proprietary tools.",
  },
  {
    q: "Is COSMOQ secure for enterprise use?",
    a: "Security is built into COSMOQ's foundation. The platform features end-to-end encryption for data in transit and at rest, real-time threat detection, behavior monitoring, and compliance alignments with SOC2 and GDPR.",
  },
  {
    q: "How quickly can COSMOQ be implemented?",
    a: "Implementation is designed to be swift. With pre-built agent templates and standard connectors, basic agentic workflows can be configured and live in under a day, while custom enterprise workflows take just a few weeks.",
  },
  {
    q: "Can AI Agents replace human employees?",
    a: "COSMOQ agents are designed to augment and empower human employees, not replace them. By handling repetitive, time-consuming tasks and data analysis, agents free your team to focus on strategic, high-value initiatives.",
  },
  {
    q: "How does COSMOQ improve customer service?",
    a: "Our agents handle customer service by resolving queries instantly and accurately 24/7. They understand context, retrieve data from your knowledge base, and execute actions, leading to higher resolution rates and customer satisfaction.",
  },
  {
    q: "Is COSMOQ scalable for global operations?",
    a: "Yes, COSMOQ is built on a distributed, cloud-native architecture. It supports multi-region deployment, multi-language interaction, and automatically scales processing power to support millions of agentic actions.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Answers to common questions about our AI-powered enterprise platform.
          </p>
        </div>

        {/* FAQ Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden border border-white/5 transition-all duration-300"
              >
                {/* Header toggle */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left text-sm sm:text-base font-semibold text-white/95 hover:text-white transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-6 text-xs sm:text-sm text-white/65 leading-relaxed bg-white/[0.01]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
