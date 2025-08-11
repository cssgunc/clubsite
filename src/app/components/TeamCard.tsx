"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      className={`flex flex-col items-center ${className ?? ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <h4 className="text-lg">{title}</h4>
      <span className="text-2xl text-[#16dbbc]">{icon}</span>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </motion.div>
  );
}
