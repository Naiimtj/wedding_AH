import { useTranslation } from 'react-i18next';
import BigBackgraoundHA from '/H&A-Background.webp';
import WeddingPlace from './Sections/WeddingPlace';
import Recommendations from './Sections/Recommendations';
import AboutMe from './Sections/AboutMe';
import SectionContainer from '../components/SectionContainer';
import Divider from '../utility/Divider';

const Home = () => {
  const [t] = useTranslation('translation');
  return (
    <div className="!scroll-smooth flex flex-col items-center justify-center">
      <SectionContainer className="md:pb-10 pb-20 flex flex-col gap-y-10">
        <div className="md:text-left flex flex-col items-center">
          {/* // - HEADER */}
          <div className="relative flex flex-col mb-4 items-center md:mt-11 mt-20">
            <img
              className="md:w-5/6 w-full h-auto object-cover"
              src={BigBackgraoundHA}
              alt={t('Picture Hadil & Álex')}
            />
            <div className="absolute w-full xl:top-1/4 lg:top-40 md:top-28 top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
              <div className="text-center xl:text-3xl lg:text-2xl md:text-2xl text-lg text-white text-shadow-custom">
                27·06·2025
              </div>
              <div className="text-center xl:text-9xl lg:text-8xl md:text-7xl text-5xl tracking-tight sm:text-9xl text-white font-allura z-10 text-shadow-custom">
                Hadil & Álex
              </div>
            </div>
          </div>
          <Divider />
        </div>
      </SectionContainer>
      <WeddingPlace />
      <Divider />
      <Recommendations />
      <Divider />
      <AboutMe />
    </div>
  );
};

export default Home;
