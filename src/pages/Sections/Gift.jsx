import { useTranslation } from 'react-i18next';
import SectionContainer from '../../components/SectionContainer';
import GiftContent from '../../components/GiftContent';

const Gift = () => {
  const [t] = useTranslation('translation');
  return (
    <SectionContainer id="gift" className="flex flex-col items-center mb-20">
      <h2 className="flex items-center mb-6 text-5xl font-semibold gap-x-3 text-blueLightWedding dark:text-blueWedding">
        {t('Regalo')}
      </h2>
      <GiftContent />
    </SectionContainer>
  );
};

export default Gift;
