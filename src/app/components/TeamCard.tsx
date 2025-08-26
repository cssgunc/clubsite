"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type TeamCardProps = {
  title: string;
  icon: ReactNode;
  description: string;
  className?: string;
  delay?: number;
};

export function TeamCard({
  title,
  icon,
  description,
  className,
  delay = 0,
}: TeamCardProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={`flex flex-col items-center ${className ?? ""}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.5 }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 0.5, delay, ease: "easeOut" }
      }
    >
      <h4 className="text-lg">{title}</h4>
      <span className="text-2xl text-[#16dbbc]">{icon}</span>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </motion.div>
  );
}
