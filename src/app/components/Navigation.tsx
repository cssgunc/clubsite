"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { PillLink } from "./PillLink";
import { useState } from "react";
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

  return (
    <div className="fixed top-0 left-0 w-full flex flex-row justify-between pt-5 pb-5 px-20 items-center z-50 backdrop-blur-lg bg-slate-900/50">
      <Image src="/cssgWhiteLogo.png" alt="Logo" width={75} height={75} priority />
      <div className="flex flex-row space-x-5 justify-end items-center">
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
      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}>
        <ContactCore onClose={() => setIsContactOpen(false)} />
      </Modal>
    </div>
  );
};
