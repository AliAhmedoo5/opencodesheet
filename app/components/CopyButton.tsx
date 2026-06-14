"use client";

import { IconCopy, IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 1500);
    } catch { /* silently fail */ }
  };

  return (
    <button
      onClick={copy}
      aria-label="Copy to clipboard"
      className={cn(
        "absolute top-1.5 right-1.5 z-10 flex items-center justify-center w-7 h-7 rounded-md transition-all duration-200",
        "opacity-0 group-hover:opacity-100 hover:bg-bg3/80 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-accent/50",
        "max-sm:opacity-100 max-sm:w-8 max-sm:h-8",
        done ? "text-accent2" : "text-text2 hover:text-text",
        className
      )}
    >
      {done ? <IconCheck size={14} /> : <IconCopy size={14} />}
    </button>
  );
}
