import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import { once } from "events";

export default function SlideFromBottom({
  children,
  once = true,
  className,
}: {
  children: React.ReactNode;
  once?: boolean;
  className?: string;
}) {
  const divRef = useRef(null);
  const animationControls = useAnimation();
  const inView = useInView(divRef, { once: true });

  useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    } else {
      if (once) return;

      animationControls.start("hidden");
    }
  }, [inView]);

  return (
    <motion.div
      ref={divRef}
      variants={{
        hidden: {
          y: "100px",
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className={className}
      initial="hidden"
      transition={{ duration: 0.55, ease: "easeOut" }}
      animate={animationControls}
    >
      {children}
    </motion.div>
  );
}
