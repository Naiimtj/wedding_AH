import { useTranslation } from "react-i18next";
import SectionContainer from "../../components/SectionContainer";
import ArrivalOptionsToGo from "../../components/ArrivalOptionsToGo/ArrivalOptionsToGo";

const ArrivalOptions = () => {
  const [t] = useTranslation("translation");
  return (
    <SectionContainer id="arrival" className="flex flex-col items-center">
      <h2 className="flex items-center mb-6 text-5xl font-semibold gap-x-3 text-blueLightWedding dark:text-blueWedding">
        {t('Opciones de llegada')}
      </h2>
      <ArrivalOptionsToGo />
    </SectionContainer>
  );
};

export default ArrivalOptions;
