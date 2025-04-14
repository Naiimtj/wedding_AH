import { useTranslation } from 'react-i18next';
import Place from '../../components/Place/Place';
import SectionContainer from '../../components/SectionContainer';

const WeddingPlace = () => {
  const [t] = useTranslation('translation');
  return (
    <SectionContainer id="wedding-place" className="flex flex-col items-center">
      <h2 className="flex items-center mb-6 text-5xl font-semibold gap-x-3 text-blueLightWedding dark:text-blueWedding">
        {t('We are Marrying!')}
      </h2>
      <Place />
    </SectionContainer>
  );
};

export default WeddingPlace;
