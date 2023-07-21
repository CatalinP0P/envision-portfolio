import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAnimation, useInView } from "framer-motion";

export default function Reveal({
  children,
  color = "primary",
  once = true,
  className,
}: {
  children: React.ReactNode;
  color?: string;
  once?: boolean;
  className?: string;
}) {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: false });
  const animationControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      animationControls.start("visible");
    } else {
      if (once) return;
      slideControls.start("hidden");
      animationControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div className={"relative w-fit overflow-hidden " + className} ref={divRef}>
      <motion.div
        variants={{
          hidden: {
            y: "50%",
            opacity: 0,
          },
          visible: { y: -5, opacity: 1 },
        }}
        className="py-1"
        initial="hidden"
        animate={animationControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0,
          },
          visible: {
            left: "100%",
          },
        }}
        transition={{ duration: 0.35 }}
        initial="hidden"
        animate={slideControls}
        className={
          "absolute left-0 top-[10%] opacity-75 bottom-0 right-0 " +
          (color ? `bg-${color}` : "bg-primary")
        }
      ></motion.div>
    </div>
  );
}
