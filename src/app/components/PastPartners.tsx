"use client";
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
      <div className="flex flex-wrap gap-8 justify-center mb-2">
        {partners.map((p, index) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"

          	initial={prefersReducedMotion ? {opacity: 0}: { opacity: 0, y: 20 }}
          	whileInView={prefersReducedMotion ? {opacity: 1} : { opacity: 1, y: 0 }}
          	viewport={{ once: true, amount: 0.5 }}
          	transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}

            className={
              "relative flex flex-1/4 xl:flex-1/6 grow h-12"
              + " hover:before:bg-[#16dbbc] before:rounded-full before:m-auto before:scale-150 before:w-16 before:h-8 before:blur-2xl before:opacity-50 before:transition-all before:duration-300"
            }
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill={true}
              className="z-10 object-contain transition opacity-70 grayscale hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};
