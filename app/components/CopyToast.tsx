"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function useCopyToast() {
  const [copied, setCopied] = useState("");

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(""), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  return { copied, setCopied };
}

export function CopyToast({ text }: { text: string }) {
  return (
    <AnimatePresence>
      {text && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg border border-accent/20 bg-accent/[.04] backdrop-blur-xl text-xs text-accent"
        >
          Copied {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
