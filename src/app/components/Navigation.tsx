"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const routes = [
  {
    name: "Our Work",
    href: "/our-work",
    isReferrer: false,
    fa: faCode,
  },
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
  const pathname = usePathname();

  return (
    <div
      className="fixed top-0 left-0 w-full flex flex-row justify-between pt-5 pb-5 px-20 items-center z-50"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(15, 23, 42, 0.8)", // Semi-transparent background
      }}
    >
      <Image src="/cssgWhiteLogo.png" alt="Logo" width={75} height={75} />
      <div className="flex flex-row space-x-5 justify-end">
        {routes.map((link) => (
          <Link
            href={link.href}
            className="ml-1 mr-1 group rounded-lg"
            target={link.isReferrer ? "_blank" : "_self"}
            rel={link.isReferrer ? "noopener noreferrer" : ""}
            key={link.name}
          >
            <h2 className={`block text-center font-semibold lg:text-left`}>
              {link.fa && (
                <FontAwesomeIcon
                  icon={link.fa}
                  className={`mr-2 text-[#16dbbc]`}
                />
              )}
              {link.name}{" "}
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
        ))}
        {pathname != "/" && (
          <Link
            href="/"
            className="block group rounded-lg lg:border lg:px-5 lg:py-4 transition-colors"
          >
            <h2
              className={`text-xs flex flex-col lg:block lg:text-lg font-semibold`}
            >
              <FontAwesomeIcon icon={faHome} /> Home
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
        )}
      </div>
    </div>
  );
};
