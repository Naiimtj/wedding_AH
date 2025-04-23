import { useTranslation } from 'react-i18next';
import Destination from './Destination';

const InterestDestinationsContent = () => {
  const [t] = useTranslation('translation');
  return (
    <div className="flex flex-col items-center gap-y-8 text-blueLightWedding dark:text-blueWedding">
      <div className="text-xl text-center w-2/3">
        {t(
          'Quizá te aptezca quedarte uno días más en Marruecos para visitar el país y disfrutar de sus ciudades, paisajes y gastronomía. Estos son algunas ciudades de interés con aeropuerto para elaborar vuestro itinerario.'
        )}
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-4 mx-8">
        <Destination imagen="/tanger.webp" title="Tánger" />
        <Destination imagen="/rabat.webp" title="Rabat" />
        <Destination imagen="/casablanca.webp" title="Casablanca" />
        <Destination imagen="/marrakech.webp" title="Marrakech" />
      </div>
    </div>
  );
};

export default InterestDestinationsContent;
