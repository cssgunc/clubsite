"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type TenantItemProps = {
  index: number;
  children: ReactNode;
};

export function TenantItem({ index, children }: TenantItemProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.5 }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }
      }
    >
      <span
        className={`text-[#16dbbc] text-4xl font-bold min-w-10 flex items-center justify-center ${
          index === 0 ? "pr-1" : ""
        }`}
      >
        {index + 1}
      </span>
      <p className="text-base md:text-lg leading-relaxed">{children}</p>
    </motion.div>
  );
}
