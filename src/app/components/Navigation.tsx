"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { PillLink } from "./PillLink";
import { useEffect, useRef, useState } from "react";
import { Modal } from "./modals/Modal";
import ContactCore from "./modals/Contact";

const routes = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/unc-cs-social-good/",
    isReferrer: true,
    fa: faLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/unc_cssg/",
    isReferrer: true,
    fa: faInstagram,
  },
  {
    name: "Email",
    href: "mailto:cssgunc@gmail.com",
    isReferrer: true,
    fa: faEnvelope,
  },
];

export const Navigation = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex flex-row justify-between pt-4 pb-4 px-4 md:px-10 lg:px-20 items-center z-50 bg-slate-900/50 backdrop-blur-sm">
      <Image
        src="/cssgWhiteLogo.png"
        alt="Logo"
        width={75}
        height={75}
        priority
      />
      <div
        className="relative flex flex-row justify-end items-center"
        ref={menuRef}
      >
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-[#16dbbc]/40 bg-[#16dbbc]/10 px-4 py-2 text-sm text-[#16dbbc] hover:bg-[#16dbbc]/20 transition-colors lg:hidden md:hidden"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          Menu
        </button>
        <div
          id="nav-menu"
          aria-hidden={!menuOpen}
          className={`absolute right-4 top-full mt-2 w-56 rounded-md border border-white/10 bg-slate-900/95 shadow-xl p-2 flex flex-col gap-1 origin-top-right transform transition duration-200 ease-out ${
            menuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          } lg:hidden`}
        >
          {routes.map((link) => (
            <Link
              href={link.href}
              className="group rounded-md px-3 py-2 inline-flex items-center text-sm"
              target={link.isReferrer ? "_blank" : "_self"}
              rel={link.isReferrer ? "noopener noreferrer" : ""}
              key={link.name}
              onClick={() => setMenuOpen(false)}
            >
              {link.fa && (
                <FontAwesomeIcon
                  icon={link.fa}
                  fixedWidth
                  className="mr-2 text-[#16dbbc] text-base shrink-0"
                />
              )}
              <span>{link.name}</span>
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setIsContactOpen(true);
            }}
            className="text-left group rounded-md px-3 py-2 inline-flex items-center text-sm"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              fixedWidth
              className="mr-2 text-[#16dbbc]"
            />
            <span>Contact Us</span>
          </button>
        </div>

        <div className="hidden lg:flex md:flex flex-row space-x-3 items-center">
          {routes.map((link) => (
            <Link
              href={link.href}
              className="ml-1 mr-1 group rounded-lg inline-flex items-center px-4 py-2"
              target={link.isReferrer ? "_blank" : "_self"}
              rel={link.isReferrer ? "noopener noreferrer" : ""}
              key={link.name}
            >
              <h2
                className={`relative inline-flex items-center lg:text-left text-sm leading-none font-semibold`}
              >
                {link.fa && (
                  <FontAwesomeIcon
                    icon={link.fa}
                    fixedWidth
                    className={`mr-2 text-[#16dbbc] text-base shrink-0`}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
                <span className="hidden lg:inline-block absolute left-full ml-1 top-1/2 -translate-y-1/2 origin-left opacity-0 -z-10 scale-50 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0">
                  -&gt;
                </span>
              </h2>
            </Link>
          ))}
          <PillLink
            href="#contact"
            label="Contact Us"
            icon={<FontAwesomeIcon icon={faEnvelope} fixedWidth />}
            onClick={() => setIsContactOpen(true)}
          />
        </div>
      </div>
      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}>
        <ContactCore onClose={() => setIsContactOpen(false)} />
      </Modal>
    </div>
  );
};
