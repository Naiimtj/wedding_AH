import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import CardCountdown from './CardCountdown';

const Place = () => {
  const [t] = useTranslation('translation');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-06-27T21:30:00');
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
      <div className="text-xl text-center w-2/3">
        A Hadil y a mí nos alegra mucho invitarte a nuestra boda en Marruecos.
        Será una celebración única, llena de alegría y tradición magrebí. Nos
        encantaría compartir ese momento contigo.
      </div>
      <div className="text-4xl">27 Junio 2025</div>
      <div className="text-2xl font-semibold grid grid-cols-4 gap-x-4">
        <CardCountdown timeLeft={timeLeft.days} text={t('Days')} />
        <CardCountdown timeLeft={timeLeft.hours} text={t('Hours')} />
        <CardCountdown timeLeft={timeLeft.minutes} text={t('Minutes')} />
        <CardCountdown timeLeft={timeLeft.seconds} text={t('Seconds')} />
      </div>
      <img
        className="md:w-1/2 w-full h-auto object-cover"
        src={'/H&A-Background.webp'}
        alt={t('Picture Hadil & Álex')}
      />
    </div>
  );
};

export default Place;
