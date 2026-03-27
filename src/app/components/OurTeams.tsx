import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faChartLine,
  faCode,
  faGraduationCap,
  faUserPlus,
  faUserTie,
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-baseline">
        <TeamCard
          title="Projects"
          icon={<FontAwesomeIcon icon={faCode} />}
          description="The projects team is responsible for building projects benefiting nonprofits in the Chapel Hill area and beyond."
          delay={0 * 0.05}
        />
        <TeamCard
          title="Education"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
          description="The education team is responsible for running semester long classes to teach members the technical skills required for membership on a project team."
          delay={1 * 0.05}
        />
         <TeamCard
          title="Executive"
          icon={<FontAwesomeIcon icon={faUserTie} />}
          description="The executive team is responsible for providing leadership and direction for all of the branches within CS+SG."
          delay={2 * 0.05}
        />
        <TeamCard
          title="Strategy"
          icon={<FontAwesomeIcon icon={faChartLine} />}
          description="The strategy team is responsible for developing and executing the long-term vision and strategy for CS+SG."
          delay={3 * 0.05}
        />
         <TeamCard
          title="Design"
          icon={<FontAwesomeIcon icon={faBrush} />}
          description="The design team is responsible for creating the extraordinary UI/UX designs all of our projects use."
          delay={2 * 0.05}
        />
      </div>
    </div>
  );
}
