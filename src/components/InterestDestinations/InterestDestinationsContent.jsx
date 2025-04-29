import { useTranslation } from 'react-i18next';
import Destination from './Destination';

const InterestDestinationsContent = () => {
  const [t] = useTranslation('translation');
  return (
    <div className="flex flex-col items-center gap-y-8 text-blueLightWedding dark:text-blueWedding">
      <div className="text-xl text-center md:w-2/3">
        {t(
          'Quizá te apetezca quedarte unos días más en Marruecos para visitar el país y disfrutar de sus ciudades, paisajes y gastronomía. Estas son algunas ciudades de interés con aeropuerto para elaborar vuestro itinerario.'
        )}
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 justify-items-center gap-4 xl:mx-8">
        <Destination image="/tanger.webp" title="Tánger" />
        <Destination image="/rabat.webp" title="Rabat" />
        <Destination image="/casablanca.webp" title="Casablanca" />
        <Destination image="/marrakech.webp" title="Marrakech" />
      </div>
    </div>
  );
};

export default InterestDestinationsContent;
