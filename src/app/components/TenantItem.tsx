"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export type TenantItemProps = {
  index: number;
  children: ReactNode;
};

export function TenantItem({ index, children }: TenantItemProps) {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
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
