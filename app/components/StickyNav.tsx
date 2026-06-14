"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#cli", label: "CLI" },
  { href: "#slash", label: "TUI Slash" },
  { href: "#keybinds", label: "Keybinds" },
  { href: "#tools", label: "Tools" },
  { href: "#custom", label: "Custom" },
  { href: "#env", label: "Env" },
  { href: "#combos", label: "Combos" },
];

export function StickyNav() {
  const [active, setActive] = useState("cli");
  const [scrolled, setScrolled] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      const el = navRef.current;
      if (!el) return;
      setCanScrollRight(el.scrollWidth - el.scrollLeft - el.clientWidth > 4);
    };
    const el = navRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-14 flex items-center transition-shadow duration-300",
        "bg-bg/85 backdrop-blur-xl border-b border-border",
        scrolled && "shadow-[0_2px_24px_rgba(0,0,0,.4)]"
      )}
    >
      <div className="flex items-center w-full max-w-[1300px] mx-auto px-4 sm:px-6 gap-3">
        <span className="font-bold text-sm text-text whitespace-nowrap shrink-0 max-sm:hidden">
          OpenCode <span className="text-accent">Cheatsheet</span>
        </span>

        <div className="relative flex-1 min-w-0">
          <div
            ref={navRef}
            className="flex gap-1.5 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "shrink-0 snap-start px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border border-transparent whitespace-nowrap",
                  active === item.href.slice(1)
                    ? "text-accent border-accent/50 bg-accent/10"
                    : "text-text2 hover:text-text hover:border-border"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg to-transparent transition-opacity duration-300 sm:w-16",
              canScrollRight ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      </div>
    </nav>
  );
}
