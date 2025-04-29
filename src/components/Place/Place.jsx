import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import CardCountdown from './CardCountdown';
import Dinner from '../../assets/icons/Dinner';
import WeddingPlace from '../../assets/icons/WeddingPlace';

const Place = () => {
  const [t] = useTranslation('translation');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-06-27T21:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-8 text-blueLightWedding dark:text-blueWedding">
      <div className="text-xl text-center md:w-2/3">
        A Hadil y a mí nos alegra mucho invitarte a nuestra boda en Marruecos.
        Será una celebración única, llena de alegría y tradición magrebí. Nos
        encantaría compartir ese momento contigo.
      </div>
      <div className="text-4xl">27 Junio 2025</div>
      <div className="text-2xl font-semibold grid grid-cols-4 md:gap-x-4 gap-x-1">
        <CardCountdown timeLeft={timeLeft.days} text={t('D')} />
        <CardCountdown timeLeft={timeLeft.hours} text={t('H')} />
        <CardCountdown timeLeft={timeLeft.minutes} text={t('Min')} />
        <CardCountdown timeLeft={timeLeft.seconds} text={t('Seg')} />
      </div>
      <div className="relative flex justify-center md:w-2/3 w-full lg:h-auto h-[500px] mt-10">
        <img
          className="object-cover md:w-2/3 w-full rounded-xl"
          src={'/Dinner-Place.webp'}
          alt={t('Picture Hadil & Álex')}
        />
        <div className="absolute top-0 left-1/5 md:w-2/3 w-full h-full bg-black opacity-50 rounded-xl"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <div className="flex flex-col items-center gap-8">
            <Dinner />
            <div className="font-bold text-center">
              <div className="text-3xl font-semibold">{t('21:00 - 6:00')}</div>
              <div className="text-xl font-semibold">
                {t('Sí... toda la noche')}
              </div>
            </div>
          </div>
          <div className="border-t border-blueWedding w-60 lg:my-16 my-4"></div>

          <div className="flex flex-col items-center gap-8">
            <div className="lg:text-5xl text-3xl font-bold">
              {t('Palais Laraki Meknes')}
            </div>            
            <div
              className="text-center lg:text-2xl cursor-pointer hover:text-blueWedding transition duration-300"
              onClick={() =>
                window.open(
                  'https://maps.app.goo.gl/FH4CAdikpkdL3ZDAA',
                  '_blank'
                )
              }
            >
              <div>Av. Abderrahmane bnou zidane</div>
              <div>Meknès 50000, Marruecos</div>
            </div>

            <button
              onClick={() =>
                window.open('https://goo.gl/maps/9v2Y1a5Z3xk', '_blank')
              }
              className="md:mt-8 lg:text-2xl bg-white text-blueLightWedding font-bold py-4 md:px-12 px-4 rounded-lg shadow-lg hover:bg-blueLightWedding hover:text-white hover:shadow-xl transition duration-300"
            >
              <WeddingPlace className="inline-block mr-2 md:w-8 w-6" />
              {t('Abrir en Google Maps')}
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative md:w-3/4 w-full md:h-96 h-80 my-10">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5217991503523!2d-5.5372575999999984!3d33.87621289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda045145e92431f%3A0xac6a1f0dd21f6189!2sPalais%20Laraki!5e0!3m2!1ses!2ses!4v1745173597644!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          onError={(e) => {
            console.error('Failed to load iframe content:', e);
            alert(
              'Failed to load map. Please check your internet connection or try again later.'
            );
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Place;
