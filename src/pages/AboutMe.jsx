import { useTranslation } from "react-i18next";
import { ProfileCheck } from "../assets/icons";
import SectionContainer from "../components/SectionContainer";
import AboutMeItem from "../components/AboutMeItem";

const AboutMe = () => {
  const [t] = useTranslation("translation");
  return (
    <SectionContainer id="about-me">
      <h2 className="flex items-center mt-16 mb-8 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <ProfileCheck className="size-8" />
        {t("About Me")}
      </h2>
      <AboutMeItem />
    </SectionContainer>
  );
};

export default AboutMe;
