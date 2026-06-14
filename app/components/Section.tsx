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
      className={cn("py-10 sm:py-14 border-b border-border last:border-none", className)}
    >
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="pl-4 border-l-3 border-accent mb-1"
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h2>
      </motion.div>
      <p className="text-text2 text-sm sm:text-[0.9rem] mb-6 sm:mb-8 pl-4">{subtitle}</p>
      {children}
    </section>
  );
}
