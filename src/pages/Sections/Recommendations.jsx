import { useTranslation } from 'react-i18next';
import SectionContainer from '../../components/SectionContainer';
import PlaceRecommendations from '../../components/PlaceRecommendations';

const Recommendations = () => {
  const [t] = useTranslation('translation');
  return (
    <SectionContainer id="recommendations" className="flex flex-col items-center">
      <h2 className="flex items-center mb-6 text-5xl font-semibold gap-x-3 text-blueLightWedding dark:text-blueWedding">
        {t('Recomendación Alojamiento en Meknes')}
      </h2>
      <PlaceRecommendations />
    </SectionContainer>
  );
};

export default Recommendations;
