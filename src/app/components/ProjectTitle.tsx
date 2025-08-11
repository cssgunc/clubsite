"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface ProjectTitleProps {
  href: string;
  logoSrc: string;
  alt: string;
  title: string;
  logoWidth?: number;
  logoHeight?: number;
}

export const ProjectTitle = ({
  href,
  logoSrc,
  alt,
  title,
  logoWidth = 40,
  logoHeight = 40,
}: ProjectTitleProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex flex-row gap-4 items-center hover:scale-[1.01] transition-transform duration-300 hover:translate-x-[4px]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="border-2 flex flex-col items-center justify-center border-gray-300 rounded-lg min-h-[52px] min-w-[52px] p-1">
        <Image
          src={logoSrc}
          alt={alt}
          width={logoWidth}
          height={logoHeight}
          className=""
          priority={false}
        />
      </div>
      <span className="flex flex-row w-full justify-between items-center">
        {title}
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-[#16dbbc] opacity-100 group-hover:opacity-90 transition-opacity duration-200 text-xs shrink-0"
        />
      </span>
    </Link>
  );
};
