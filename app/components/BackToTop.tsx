"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconArrowUp } from "@tabler/icons-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-50 w-11 h-11 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/30 hover:bg-[#7f9cff] active:scale-90 transition-colors tap-highlight-transparent max-sm:bottom-4 max-sm:right-4 max-sm:w-12 max-sm:h-12"
        >
          <IconArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
