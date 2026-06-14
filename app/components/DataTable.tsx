"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function DataTable({
  headers,
  rows,
  className,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35 }}
      className={cn("overflow-x-auto border border-border/50 rounded-xl", className)}
    >
      <table className="w-full border-collapse text-xs sm:text-sm">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left font-semibold text-text2 text-[0.65rem] sm:text-xs uppercase tracking-wider px-2.5 sm:px-3 py-2.5 border-b border-border/50"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="transition-colors hover:bg-accent/3">
              {row.map((cell, ci) => (
                <td key={ci} className="px-2.5 sm:px-3 py-2 border-b border-border/40 last:border-b-0 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export function DataList({
  items,
  keyField,
  valueField,
  className,
}: {
  items: Record<string, string>[];
  keyField: string;
  valueField: string;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
      className={cn("divide-y divide-border/30 border border-border/50 rounded-xl", className)}
    >
      {items.map((item, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 px-3 sm:px-4 py-2.5 text-xs sm:text-sm transition-colors hover:bg-accent/3">
          <code className="font-mono text-accent shrink-0 text-[0.72rem] sm:text-xs">{item[keyField]}</code>
          <span className="text-text2">{item[valueField]}</span>
        </div>
      ))}
    </motion.div>
  );
}
