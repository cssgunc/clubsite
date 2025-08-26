"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export const PastPartners = () => {
  const prefersReducedMotion = useReducedMotion();
  const partners = [
    {
      name: "Amazon Web Services",
      href: "https://aws.amazon.com/",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      alt: "AWS logo",
    },
    {
      name: "Google",
      href: "https://www.google.com/",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google logo",
    },
    {
      name: "SAS (North Carolina)",
      href: "https://www.sas.com/en_us/home.html",
      src: "https://upload.wikimedia.org/wikipedia/commons/1/10/SAS_logo_horiz.svg",
      alt: "SAS logo",
    },
    {
      name: "Innovate Carolina",
      href: "https://innovate.unc.edu/",
      src: "/innovate_carolina.png",
      alt: "Innovate Carolina logo",
    },
    {
      name: "Perplexity",
      href: "https://www.perplexity.ai/",
      src: "https://www.perplexity.ai/favicon.svg",
      alt: "Perplexity logo",
    },
  ];

  return (
    <div className="bg-white w-full rounded-lg p-6 md:p-8 text-black flex flex-col">
      <h3 className="text-xl font-semibold mb-2 font-geist-mono">
        Past Partners
      </h3>
      <p className="text-sm text-gray-500 mb-12">
        We&apos;ve worked with a variety of organizations to host workshops and
        events for our members. Here are some of the organizations we&apos;re
        working or have worked with.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center mb-2">
        {partners.map((p, index) => (
          <motion.div
            key={p.name}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={
              prefersReducedMotion ? undefined : { once: true, amount: 0.5 }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 0.5, delay: index * 0.05, ease: "easeOut" }
            }
            className="w-full"
          >
            <Link
              href={p.href}
              target="_blank"
              aria-label={p.name}
              className="group block w-full"
            >
              <div className="relative isolate h-10 md:h-12 flex items-center justify-center">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
                >
                  <span className="block w-20 md:w-24 h-20 md:h-24 rounded-full bg-[#16dbbc]/20 blur-lg opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:bg-[#16dbbc]/30 group-hover:blur-2xl" />
                </span>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill={true}
                  className="relative z-10 max-h-full w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300 ease-out"
                  loading="lazy"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
