import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCode,
  faGraduationCap,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function OurTeams() {
  return (
    <div className="bg-white w-full rounded-lg p-8 text-black flex flex-col">
      <h3 className="text-xl mb-2 font-geist-mono font-semibold">
        Our Structure
      </h3>
      <p className="text-sm text-gray-500 mb-12">
        CS+SG is comprised of a variety of components, each with a unique focus.
      </p>
      <div className="grid grid-cols-4 gap-6 items-baseline">
        <div className="flex flex-col items-center">
          <h4 className="text-lg">Projects</h4>
          <span className="text-2xl text-[#16dbbc]">
            <FontAwesomeIcon icon={faCode} />
          </span>
          <p className="text-sm text-gray-500">
            The projects team is responsible for building projects benefitting
            nonprofits in the Chapel Hill area and beyond.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-lg">Education</h4>
          <span className="text-2xl text-[#16dbbc]">
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
          <p className="text-sm text-gray-500">
            The education team is responsible for running semester long classes
            to teach members the technical skills required for membership on a
            project team.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-lg">Engagement</h4>
          <span className="text-2xl text-[#16dbbc]">
            <FontAwesomeIcon icon={faUserPlus} />
          </span>
          <p className="text-sm text-gray-500">
            The engagement team is responsible for organizing events, performing
            marketing, and hosting workshops for our members.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-lg">Strategy</h4>
          <span className="text-2xl text-[#16dbbc]">
            <FontAwesomeIcon icon={faChartLine} />
          </span>
          <p className="text-sm text-gray-500">
            The strategy team is responsible for developing and executing the
            long-term vision and strategy for CS+SG.
          </p>
        </div>
      </div>
    </div>
  );
}
