"use client";
import { useState, ReactNode } from "react";

interface CollapsibleSectionProps {
  title: ReactNode;
  children: ReactNode;
  defaultExpanded?: boolean;
  titleClassName?: string;
  contentClassName?: string;
  caretClassName?: string;
}

export const CollapsibleSection = ({
  title,
  children,
  defaultExpanded = true,
  titleClassName = "",
  contentClassName = "",
  caretClassName = "",
}: CollapsibleSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`flex flex-row gap-4 items-center cursor-pointer opacity-100 hover:opacity-80 transition-opacity ${titleClassName}`}
        onClick={toggleExpanded}
      >
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${
            isExpanded ? "rotate-90" : "rotate-0"
          } ${caretClassName}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <div className="flex-1">{title}</div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[1000px] opacity-100 mb-10" : "max-h-0 opacity-0"
        } ${contentClassName}`}
      >
        <div className="flex flex-col gap-4 pl-10">{children}</div>
      </div>
    </div>
  );
};
