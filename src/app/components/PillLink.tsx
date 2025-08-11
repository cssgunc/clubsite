"use client";
import Link from "next/link";
import type { ReactNode } from "react";

interface PillLinkProps {
  href: string;
  label: ReactNode;
  icon?: ReactNode;
  className?: string;
  newTab?: boolean;
  onClick?: () => void;
}

export const PillLink = ({
  href,
  label,
  icon,
  className = "",
  newTab,
  onClick,
}: PillLinkProps) => {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full border border-[#16dbbc]/40 bg-[#16dbbc]/10 px-4 py-2 text-sm text-[#16dbbc] hover:bg-[#16dbbc]/20 transition-colors";

  const isExternal = typeof href === "string" && href.startsWith("http");
  const target = newTab ?? isExternal ? "_blank" : undefined;
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${baseClasses} ${className}`}
      >
        {icon}
        <span>{label}</span>
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${className}`}
      target={target}
      rel={rel}
    >
      {icon}
      <span className="w-full flex flex-row justify-center">{label}</span>
    </Link>
  );
};
