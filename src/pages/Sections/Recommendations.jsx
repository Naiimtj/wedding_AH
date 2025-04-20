import { useTranslation } from "react-i18next";
import { Code } from "../../assets/icons";
import SectionContainer from "../../components/SectionContainer";
import Project from "../../components/Project/Project";

const Recommendations = () => {
  const [t] = useTranslation("translation");
  return (
    <SectionContainer id="recommendations">
      <h2 className="flex items-center my-16 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <Code className="size-8" />
        {t("Recomendaciones")}
      </h2>
      <Project />
    </SectionContainer>
  );
};

export default Recommendations;
