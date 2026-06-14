"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeLabel } from "./BadgeLabel";
import { CodeBlock } from "./CodeBlock";
import type { CommandItem } from "@/lib/data";

export function CommandCard({
  item,
  variant = "cli",
}: {
  item: CommandItem;
  variant?: "cli" | "slash" | "tool" | "combo" | "key";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35 }}
      className="group bg-bg2 border border-border rounded-lg p-4 sm:p-5 transition-all duration-250 hover:border-accent/30 hover:shadow-[0_4px_24px_rgba(108,140,255,.06)] hover:-translate-y-0.5"
    >
      {item.label && <BadgeLabel text={item.label} variant={variant} />}
      <h3 className="text-sm sm:text-base font-semibold mb-1">
        <code className="bg-bg3 text-text font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded">{item.title}</code>
      </h3>
      <p className="text-text2 text-xs sm:text-sm leading-relaxed">{item.description}</p>
      {item.example && <CodeBlock>{item.example}</CodeBlock>}
      {item.syntax && <CodeBlock type="syntax">{item.syntax}</CodeBlock>}
    </motion.div>
  );
}
