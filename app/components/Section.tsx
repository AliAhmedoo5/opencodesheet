"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("py-10 sm:py-16 border-b border-border/50 last:border-none", className)}
    >
      <div className="flex items-start gap-3 mb-1">
        <div className="w-[2px] shrink-0 self-stretch bg-accent/60 rounded-full mt-1.5" />
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35 }}
            className="text-lg sm:text-2xl font-bold tracking-tight"
          >
            {title}
          </motion.h2>
          <p className="text-text2 text-xs sm:text-[0.9rem] mt-0.5">{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  );
}
