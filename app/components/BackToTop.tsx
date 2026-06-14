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
          className="fixed bottom-6 right-5 z-50 w-10 h-10 rounded-full border border-accent/30 bg-bg/80 backdrop-blur-md text-accent flex items-center justify-center hover:bg-accent/10 hover:border-accent/50 active:scale-90 transition-all duration-200 max-sm:bottom-4 max-sm:right-4 max-sm:w-11 max-sm:h-11"
        >
          <IconArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
