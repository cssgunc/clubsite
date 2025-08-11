import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-12 px-6 lg:px-20 py-6 text-sm text-slate-300 border-t border-slate-700/40 backdrop-blur-sm bg-slate-900/30">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span>Made with</span>
          <span role="img" aria-label="love">
            ❤️
          </span>
          <span>by CS+SG, 2025</span>
        </div>
        <div className="opacity-80">CS + Social Good at UNC Chapel Hill</div>
        <span className="flex flex-row gap-2 items-center">
          <Link href="https://github.com/cssgunc" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="shrink-0" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/unc-cs-social-good/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="shrink-0" />
          </Link>
          <Link href="https://www.instagram.com/unc_cssg/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="shrink-0" />
          </Link>
          <Link href="mailto:cssgunc@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="shrink-0" />
          </Link>
        </span>
      </div>
    </footer>
  );
};
