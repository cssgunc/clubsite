"use client";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, ReactNode } from "react";

interface CollapsibleSectionProps {
  title: ReactNode;
  children: ReactNode;
  defaultExpanded?: boolean;
  href?: string;
  titleClassName?: string;
  contentClassName?: string;
  caretClassName?: string;
}

export const CollapsibleSection = ({
  title,
  children,
  defaultExpanded = true,
  href = "",
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
        {href && (
          <Link
            href={href}
            target="_blank"
            className={`font-geist-sans text-sm border-2 rounded-full bg-[#16dbbc]/10 border-[#16dbbc]/40 text-[#16dbbc] px-2 py-1 max-w-fit hover:bg-[#16dbbc]/20 duration-200 flex items-center gap-1 transition-all duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            See this project in action...{" "}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        )}
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
