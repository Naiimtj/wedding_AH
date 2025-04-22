import { useTranslation } from "react-i18next";
import SectionContainer from "../../components/SectionContainer";

const InterestDestinations = () => {
  const [t] = useTranslation("translation");
  return (
    <SectionContainer id="interest-destinations" className="flex flex-col items-center">
      <h2 className="flex items-center mb-6 text-5xl font-semibold gap-x-3 text-blueLightWedding dark:text-blueWedding">
        {t("Destinos de Interés")}
      </h2>
    </SectionContainer>
  );
};

export default InterestDestinations;
