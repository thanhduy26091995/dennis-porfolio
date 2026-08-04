"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="font-mono text-[var(--accent)] text-lg font-bold hover:opacity-80 transition-opacity"
        >
          DB
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <span className="text-[var(--accent)] mr-1">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden font-mono text-2xl leading-none text-[var(--accent)] p-2 -mr-2"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile nav panel */}
      <ul
        id="mobile-nav"
        className={`md:hidden list-none flex-col gap-1 px-6 pb-4 bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-mono text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <span className="text-[var(--accent)] mr-1">0{i + 1}.</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
