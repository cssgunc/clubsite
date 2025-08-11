"use client";
import Image from "next/image";
import { CollapsibleSection } from "./CollapsibleSection";
import { ProjectTitle } from "./ProjectTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLock } from "@fortawesome/free-solid-svg-icons";
import { PillLink } from "./PillLink";

export const PastProjects = () => {
  const breastCancerHubTitle = (
    <ProjectTitle
      href="https://apps.apple.com/ca/app/bch-know-your-breasts/id6745075472?uo=2"
      logoSrc="/bch_logo.webp"
      alt="Breast Cancer Hub"
      title="Breast Cancer Hub"
    />
  );

  const catchTitle = (
    <ProjectTitle
      href="https://www.catch-inc.com/"
      logoSrc="/catch_logo.png"
      alt="CATCH"
      title="CATCH"
    />
  );

  const compassTitle = (
    <ProjectTitle
      href="https://compassctr.org"
      logoSrc="/compass_center_logo.png"
      alt="Compass Center"
      title="Compass Center"
    />
  );

  const lemkinTitle = (
    <ProjectTitle
      href="https://www.linkedin.com/company/lemkin-ai/"
      logoSrc="/lemkin_logo.png"
      alt="Lemkin AI"
      title="Lemkin AI"
    />
  );

  const beautifulTogetherTitle = (
    <ProjectTitle
      href="https://beautiful-together-next.vercel.app/tinder-page"
      logoSrc="/beautiful_together_logo.png"
      alt="Beautiful Together"
      title="Beautiful Together"
    />
  );

  return (
    <div className="bg-white w-full rounded-lg p-8 text-black flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-xl font-semibold mb-2 font-geist-mono">
          Past and Current Projects
        </h3>
        <PillLink
          href="https://forms.gle/6vEGzGwmiBtPPbtr5"
          label="Apply to Join a Project Team"
          icon={<FontAwesomeIcon icon={faCode} />}
        />
      </div>
      <p className="text-sm text-gray-500 mb-4">
        A sample of some projects we&apos;ve worked on in recent semesters.
      </p>
      <CollapsibleSection
        title={breastCancerHubTitle}
        titleClassName="text-[#16dbbc] text-2xl min-w-fit font-geist-mono"
        defaultExpanded={false}
      >
        <p className="text-sm text-gray-500">
          BCH Know Your Breasts is a free mobile app developed by CS+SG in
          collaboration with Breast Cancer Hub. It&apos;s a tool that helps
          women examine their breasts and detect abnormalities, keeping track of
          previous examinations and providing reminders when new examinations
          are due. It also allows users to share their results and get
          actionable next-step recommendations based on reported symptoms.
        </p>
        <div className="flex flex-row gap-4">
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
        title={catchTitle}
        titleClassName="text-[#16dbbc] text-2xl min-w-fit font-geist-mono"
        defaultExpanded={false}
      >
        <p className="text-sm text-gray-500">
          A homepage and shop for CATCH (Carolina Adapts Toys for Children), a
          non-profit organization that provides adaptive toys to children with
          special needs.
        </p>
        <Image
          src="/catch_homepage.png"
          alt="CATCH"
          width={1000}
          height={1000}
          className="border-2 border-gray-300 rounded-lg"
        />
      </CollapsibleSection>
      <CollapsibleSection
        title={compassTitle}
        titleClassName="text-[#16dbbc] text-2xl min-w-fit font-geist-mono"
        defaultExpanded={false}
      >
        <p className="text-sm text-gray-500">
          An internal tool allowing the Compass Center of Chapel Hill to
          organize and track volunteers, resources, training materials, and
          services.
        </p>
        <div className="self-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#16dbbc]/40 bg-[#16dbbc]/10 px-4 text-sm text-[#16dbbc] py-2">
            <FontAwesomeIcon icon={faLock} />
            <span>Internal only</span>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Due to privacy constraints, access is restricted to Compass Center
            staff.
          </p>
        </div>
      </CollapsibleSection>
      <CollapsibleSection
        title={lemkinTitle}
        titleClassName="text-[#16dbbc] text-2xl min-w-fit font-geist-mono"
        defaultExpanded={false}
      >
        <p className="text-sm text-gray-500">
          Designed and prototyped a web app for Lemkin AI, a platform allowing
          human rights organizations to analyze evidence, identify patterns, and
          make informed decisions in building cases across borders.
        </p>
        <Image
          src="/lemkin_dashboard.png"
          alt="Lemkin AI"
          width={1000}
          height={1000}
          className="border-2 border-gray-300 rounded-lg"
        />
      </CollapsibleSection>
      <CollapsibleSection
        title={beautifulTogetherTitle}
        titleClassName="text-[#16dbbc] text-2xl min-w-fit font-geist-mono"
        defaultExpanded={false}
      >
        <p className="text-sm text-gray-500">
          A website for Beautiful Together, a non-profit organization matching
          pets with potential adopters in a tinder style, giving animals a shot
          at finding their forever home.
        </p>
        <Image
          src="/beautiful_together.png"
          alt="Beautiful Together"
          width={900}
          height={900}
          className="border-2 border-gray-300 rounded-lg"
        />
      </CollapsibleSection>

      <div className="text-gray-500 text-xs self-center mt-4">And more...</div>
    </div>
  );
};
