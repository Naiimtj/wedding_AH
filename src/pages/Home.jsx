import { useTranslation } from 'react-i18next';
import { GitHub, LinkedInIcon, MailIcon } from '../assets/icons/SocialMedia';
import BigBackgraoundHA from '/H&A-Background.webp';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import AboutMe from './AboutMe';
import SectionContainer from '../components/SectionContainer';
import SocialPill from '../components/SocialPill';

const Home = () => {
  const [t] = useTranslation('translation');
  return (
    <div className="!scroll-smooth">
      <SectionContainer className="md:pb-44 pb-20 flex flex-col gap-y-10">
        <div className="md:text-left">
          <div>
            <div className="relative flex flex-col mb-4">
              <img
                className="w-full h-auto object-cover"
                src={BigBackgraoundHA}
                alt={t('Picture Hadil & Álex')}
              />
              {/* <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl tracking-tight sm:text-9xl text-white font-allura z-10 text-shadow-custom">
                27/06/2025
              </div> */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
                <div className="text-center sm:text-3xl text-white text-shadow-custom">
                  · 27/06/2025 ·
                </div>
                <div className="text-center text-9xl tracking-tight sm:text-9xl text-white font-allura z-10 text-shadow-custom">
                  Hadil & Álex
                </div>
              </div>
            </div>
          </div>

          <div className="md:mt-6 mt-4 text-xl text-gray-800 dark:text-gray-300">
            <p className="dark:[&>strong]:text-purple-300 [&>strong]:text-purple-500 [&>strong]:font-semibold">
              <strong>{t('Full Stack Developer')}</strong>{' '}
              <span className="hidden md:inline-block">
                {t('from Madrid, Spain.')}
              </span>
            </p>
            <p className="pt-4 md:pt-0">
              {t('Specialized in the development of unique web applications.')}
            </p>
          </div>
          {/* // - SOCIAL MEDIA */}
          <nav className="flex flex-wrap justify-left md:justify-start gap-4 mt-8">
            <SocialPill
              url="mailto:naiim.tj@gmail.com"
              txtAlt={t('Button to contact me')}
            >
              <MailIcon className="md:size-5 size-8" />
              <span className="hidden md:block">{t('Contact me')}</span>
            </SocialPill>
            <SocialPill
              url="https://linkedin.com/in/naiim-taefy-jimenez"
              txtAlt={t('Button to my LinkedIn')}
            >
              <LinkedInIcon className="md:size-5 size-8" />
              <span className="hidden md:block">LinkedIn</span>
            </SocialPill>
            <SocialPill
              url="https://github.com/Naiimtj"
              txtAlt={t('Button to my GitHub')}
            >
              <GitHub className="md:size-5 size-8" />
              <span className="hidden md:block">GitHub</span>
            </SocialPill>
          </nav>
        </div>
      </SectionContainer>
      <WorkExperience />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default Home;
