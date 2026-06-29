"use client";

import React from "react";
import Link from "next/link";
import { CosmoqLogo } from "./icons";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "#about" },
      { name: "Integration", href: "#contact" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { name: "Blogs", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Privacy policy", href: "#" },
      { name: "Terms and Conditions", href: "#" },
    ],
  },
  {
    title: "Other Pages",
    links: [{ name: "Launching Soon...", href: "#" }],
  },
  {
    title: "Social Connect",
    links: [
      { name: "Instagram", href: "#" },
      { name: "X/Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Reddit", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-white/5 bg-black/40">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] pointer-events-none -z-10">
        <div className="absolute bottom-[-50%] left-[30%] w-[40%] h-[100%] rounded-full bg-violet-600/5 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Info Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <CosmoqLogo className="h-6 w-auto text-white" />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              COSMOQ is the modern, scalable platform powering next-generation AI agents for enterprises worldwide.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="col-span-1">
              <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40">
            All rights reserved for @COSMOQ
          </p>
          <p className="text-xs text-white/40">
            Designed by Jitu Raut @fremix.design
          </p>
        </div>
      </div>
    </footer>
  );
}
