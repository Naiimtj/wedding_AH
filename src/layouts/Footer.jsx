import { useTranslation } from "react-i18next";
import { LinkedInIcon, MailIcon } from "../assets/icons/SocialMedia";
import { Link } from "react-router-dom";

export default function Footer() {
  const [t] = useTranslation("translation");

  return (
    <footer className="text-center dark:text-grayWedding text-black lg:text-left mx-6">
      <div className="flex items-center justify-center border-t-2 border-neutral-200 pt-4 lg:justify-center">
        {/* // - Social network icons container */}
        <div className="flex justify-center gap-1">
          <Link
            to="mailto:naiim.tj@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-grayWedding text-black dark:hover:text-blueWedding hover:text-blueLightWedding"
            alt={t("Button to contact me")}
          >
            <MailIcon />
          </Link>
          <Link
            to="https://linkedin.com/in/naiim-taefy-jimenez"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-grayWedding text-black dark:hover:text-blueWedding hover:text-blueLightWedding"
            alt={t("Button to my LinkedIn")}
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
      {/* // - Copyright section*/}
      <div className="p-2 text-center">
        <span>© 2024 Copyright:</span>
        <Link
          className="font-semibold dark:text-grayWedding text-black ml-2 dark:hover:text-blueWedding hover:text-blueLightWedding"
          to="https://github.com/Naiimtj"
        >
          Naiim Taefy
        </Link>
      </div>
    </footer>
  );
}
