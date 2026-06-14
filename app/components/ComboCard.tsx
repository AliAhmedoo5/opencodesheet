"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CodeBlock } from "./CodeBlock";
import type { ComboItem } from "@/lib/data";

export function ComboCard({ item }: { item: ComboItem }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35 }}
      className="bg-transparent border border-border/50 rounded-xl p-5 transition-colors duration-250 hover:border-accent5/20"
    >
      <h3 className="text-sm sm:text-base font-semibold mb-1">
        <code className="text-accent5">{item.title}</code>
      </h3>
      <p className="text-text2 text-xs sm:text-sm mb-3">{item.description}</p>

      <ul className="space-y-1.5 mb-3">
        {item.steps.map((step, i) => (
          <li key={i} className="text-text2 text-xs sm:text-sm pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-accent5 before:font-mono before:font-semibold">
            {step}
          </li>
        ))}
      </ul>

      <CodeBlock type="syntax">{item.syntax}</CodeBlock>
    </motion.div>
  );
}
