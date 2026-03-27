"use client";
import Image from "next/image";
import { CollapsibleSection } from "./CollapsibleSection";
import { ProjectTitle } from "./ProjectTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { motion, useReducedMotion } from "framer-motion";

export const PastProjects = () => {
  const prefersReducedMotion = useReducedMotion();
  const breastCancerHubTitle = (
    <ProjectTitle
      href="https://apps.apple.com/ca/app/bch-know-your-breasts/id6745075472?uo=2"
      logoSrc="/bch_logo.webp"
      alt="Breast Cancer Hub"
      title="Breast Cancer Hub"
    />
  );

  const lemkinTitle = (
    <ProjectTitle
      logoSrc="/lemkin_logo.png"
      alt="Lemkin AI"
      title="Lemkin AI"
    />
  );

  const cccTitle = (
    <ProjectTitle
      href="https://campusandcommunitycoalition.org"
      logoSrc="/ccc_logo.png"
      alt="Campus and Community Coalition"
      title="Campus and Community Coalition"
    />
  );
  const parrCenterTitle = (
    <ProjectTitle
      href="https://ethicsbowlacademy.org/homepage"
      logoSrc="/parr_center_logo_2.jpg"
      alt="Parr Center"
      title="Parr Center Ethics Bowl Academy"
    />
  );
  const ocslTitle = (
    <ProjectTitle
      logoSrc="/ocsl2.png"
      alt="Party Registration"
      title="Party Registration"
    />
  );


  return (
    <div className="bg-white w-full rounded-lg p-6 md:p-8 text-black flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-xl font-semibold mb-2 font-geist-mono">
          Past and Current Projects
        </h3>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        A sample of some projects we&apos;ve worked on in recent semesters.
      </p>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={
          prefersReducedMotion ? undefined : { once: true, amount: 0.5 }
        }
        transition={
          prefersReducedMotion ? undefined : { duration: 0.5, ease: "easeOut" }
        }
      >
        <CollapsibleSection
          title={breastCancerHubTitle}
          titleClassName="text-2xl min-w-fit font-geist-mono"
          defaultExpanded={false}
          href="https://apps.apple.com/ca/app/bch-know-your-breasts/id6745075472?uo=2"
        >
          <p className="text-sm text-gray-500">
            BCH Know Your Breasts is a free mobile app developed by CS+SG in
            collaboration with Breast Cancer Hub. It&apos;s a tool that helps
            women examine their breasts and detect abnormalities, keeping track
            of previous examinations and providing reminders when new
            examinations are due. It also allows users to share their results
            and get actionable next-step recommendations based on reported
            symptoms.
          </p>
          <div className="sm:hidden flex flex-row gap-4 overflow-x-scroll">
            <Image
              src="/bch_screen1.webp"
              alt="Breast Cancer Hub"
              width={100}
              height={200}
              className="border-2 border-gray-300 rounded-lg"
            />
            <Image
              src="/bch_screen2.webp"
              alt="Breast Cancer Hub"
              width={100}
              height={200}
              className="border-2 border-gray-300 rounded-lg"
            />
            <Image
              src="/bch_screen3.webp"
              alt="Breast Cancer Hub"
              width={100}
              height={200}
              className="border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="hidden md:flex flex-row gap-4 overflow-x-scroll">
            <Image
              src="/bch_screen1.webp"
              alt="Breast Cancer Hub"
              width={200}
              height={200}
              className="border-2 border-gray-300 rounded-lg"
            />
            <Image
              src="/bch_screen2.webp"
              alt="Breast Cancer Hub"
              width={200}
              height={200}
              className="border-2 border-gray-300 rounded-lg"
            />
            <Image
              src="/bch_screen3.webp"
              alt="Breast Cancer Hub"
              width={200}
              height={200}
              className="border-2 border-gray-300 rounded-lg"
            />
          </div>
        </CollapsibleSection>
        <CollapsibleSection
          title={ocslTitle}
          titleClassName="text-2xl min-w-fit font-geist-mono"
          defaultExpanded={false}
          href=""
        >
          <p className="text-sm text-gray-500">
            In partnership with Off-Campus Student Life and 
            Chapel Hill PD, Party Smart lets students register 
            and keep track of their house parties in exchange 
            for a citation-free experience. If a noise complaint 
            is called in, Chapel Hill PD are able to use their 
            dashboard to find the registered party and track 
            incidents via an interactive map. 

          </p>
            <Image
              src="/party_smart_policeview.png"
              alt="Party Smart Police View"
              width={700}
              height={700}
              className="border-2 border-gray-300 rounded-lg"
            />
        </CollapsibleSection>
        <CollapsibleSection
          title={parrCenterTitle}
          titleClassName="text-2xl min-w-fit font-geist-mono"
          defaultExpanded={false}
          href="https://ethicsbowlacademy.org/homepage"
        >
          <p className="text-sm text-gray-500">
            An Ethics Bowl Academy website for the Parr Center for Ethics,
            allowing them to help students build critical thinking and 
            ethical reasoning skills through interactive modules. Module features 
            include video lessons, knowledge quizzes, digital flashcards, 
            reflective writing prompts, drag-and-drop sorting questions, and public polls. 

          </p>
            <Image
              src="/parrcenter_homepage.png"
              alt="Parr Center Ethics Bowl Academy"
              width={700}
              height={700}
              className="border-2 border-gray-300 rounded-lg"
            />
        </CollapsibleSection>
        <CollapsibleSection
          title={cccTitle}
          titleClassName="text-2xl min-w-fit font-geist-mono"
          defaultExpanded={false}
          href="https://campusandcommunitycoalition.org"
        >
          <p className="text-sm text-gray-500">
            The Campus & Community Coalition (CCC) is a collaborative force 
            bringing together university and community partners to address the
            harms associated with high-risk drinking. By fostering open dialogue,
            sharing power, and using data-driven strategies, they work to create
            an environment where everyone can thrive socially, academically,
            and economically. This website will be used primarily to display 
            important trends regarding alcohol use in the Chapel Hill community 
            alongside other important resources.
          </p>
            <Image
              src="/ccc_preview.png"
              alt="Campus and Community Coalition"
              width={700}
              height={700}
              className="border-2 border-gray-300 rounded-lg"
            />
        </CollapsibleSection>
        <CollapsibleSection
          title={lemkinTitle}
          titleClassName="text-2xl min-w-fit font-geist-mono"
          defaultExpanded={false}
        >
          <p className="text-sm text-gray-500">
            Designed and prototyped a web app for Lemkin AI, a platform allowing
            human rights organizations to analyze evidence, identify patterns,
            and make informed decisions in building cases across borders.
          </p>
          <Image
            src="/lemkin_dashboard.png"
            alt="Lemkin AI"
            width={700}
            height={700}
            className="border-2 border-gray-300 rounded-lg"
          />
        </CollapsibleSection>
      </motion.div>

      <div className="text-gray-500 text-xs self-center mt-4">And more...</div>
    </div>
  );
};
