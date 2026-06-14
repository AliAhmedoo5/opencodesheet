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
        "absolute top-2 right-2 z-10 flex items-center justify-center w-6 h-6 rounded-md transition-opacity duration-200",
        "opacity-0 group-hover:opacity-100 hover:bg-accent/10 focus:opacity-100 focus:outline-none",
        "max-sm:opacity-80 max-sm:w-7 max-sm:h-7",
        done ? "text-accent2" : "text-text2/60 hover:text-text",
        className
      )}
    >
      {done ? <IconCheck size={14} /> : <IconCopy size={14} />}
    </button>
  );
}
