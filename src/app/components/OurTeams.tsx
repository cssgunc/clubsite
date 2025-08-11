import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCode,
  faGraduationCap,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { TeamCard } from "./TeamCard";

export default function OurTeams() {
  return (
    <div className="bg-white w-full rounded-lg p-6 md:p-8 text-black flex flex-col">
      <h3 className="text-xl mb-2 font-geist-mono font-semibold">
        Our Structure
      </h3>
      <p className="text-sm text-gray-500 mb-12">
        CS+SG is comprised of a variety of components, each with a unique focus.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-baseline">
        <TeamCard
          title="Projects"
          icon={<FontAwesomeIcon icon={faCode} />}
          description="The projects team is responsible for building projects benefitting nonprofits in the Chapel Hill area and beyond."
          delay={0 * 0.05}
        />
        <TeamCard
          title="Education"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
          description="The education team is responsible for running semester long classes to teach members the technical skills required for membership on a project team."
          delay={1 * 0.05}
        />
        <TeamCard
          title="Engagement"
          icon={<FontAwesomeIcon icon={faUserPlus} />}
          description="The engagement team is responsible for organizing events, performing marketing, and hosting workshops for our members."
          delay={2 * 0.05}
        />
        <TeamCard
          title="Strategy"
          icon={<FontAwesomeIcon icon={faChartLine} />}
          description="The strategy team is responsible for developing and executing the long-term vision and strategy for CS+SG."
          delay={3 * 0.05}
        />
      </div>
    </div>
  );
}
