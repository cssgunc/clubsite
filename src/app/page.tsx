"use client";
import Image from "next/image";
import { PastProjects } from "./components/PastProjects";
import { PastPartners } from "./components/PastPartners";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { PillLink } from "./components/PillLink";
import OurTeams from "./components/OurTeams";
import { TenantItem } from "./components/TenantItem";

const introText =
  " is a student organization dedicated to using our technical skills, time, and resources to make a positive impact on our campus, in our community, and in the world.";

const missionTitle = "Our Work is Threefold...";

const tenants = [
  "To complete impactful, technically challenging projects for nonprofit clients, pro bono, to lighten the heavy burden these organizations face.",
  "To provide a space for students to learn about the intersection of computer science and social good, and to connect with other students who are interested in this field.",
  "To create opportunites for professional development and industry connections for our members, with an emphasis on partners who make a positive impact in the world.",
];

function TypingAnimation() {
  const text = "at the University of North Carolina at Chapel Hill ";
  const [displayedText, setDisplayedText] = useState("");
  const [showGoat, setShowGoat] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Show goat after a brief delay
        setTimeout(() => setShowGoat(true), 100);
      }
    }, 25); // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-xl text-sky-300 transition-colors cursor-default bg-sky-300/10 rounded-lg p-2 mt-5">
      <span>{displayedText}</span>
      {showGoat && (
        <motion.span
          initial={{ scale: 0, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15,
            duration: 0.6,
          }}
          className="inline-block"
        >
          🐐
        </motion.span>
      )}
      <span className="animate-pulse">|</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <section className="w-full px-4 md:px-10 lg:px-20 flex flex-col items-center min-h-screen justify-center">
        <div className="flex flex-col items-center rounded-lg mt-24">
          <Image
            src="/cssglogo.svg"
            alt="Logo"
            width={480}
            height={320}
            className=""
            priority
          />
          <TypingAnimation />
          <div className="text-lg py-8 md:py-12 px-0 md:px-20 lg:px-40">
            <p className="text-center text-lg md:text-xl">
              <span className="text-[#16dbbc]">CS + Social Good</span>{" "}
              {introText}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-2"
          >
            <PillLink
              href="https://forms.gle/rZzLWE1WeLTA26C66"
              label="Join Our Executive Board"
              icon={<FontAwesomeIcon icon={faUserPlus} />}
            />
            <PillLink
              href="https://forms.gle/6vEGzGwmiBtPPbtr5"
              label="Apply to Join a Team"
              icon={<FontAwesomeIcon icon={faCode} />}
            />
          </motion.div>
        </div>
      </section>

      {/* Rest of the content flows below */}
      <section className="w-full px-4 md:px-10 lg:px-20 flex flex-col items-center space-y-8 md:space-y-12">
        <div className="bg-white rounded-lg p-6 md:p-8 text-black w-full">
          <h3 className="text-xl font-semibold mb-6 font-geist-mono">
            {missionTitle}
          </h3>

          <div className="space-y-6">
            {tenants.map((tenant, index) => (
              <TenantItem key={index} index={index}>
                {tenant}
              </TenantItem>
            ))}
          </div>
        </div>
        <OurTeams />
        <PastProjects />
        <PastPartners />
      </section>
    </div>
  );
}
