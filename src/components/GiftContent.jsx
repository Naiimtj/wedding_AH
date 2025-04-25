import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Copy from '../assets/icons/Copy';

const GiftContent = () => {
  const [t] = useTranslation('translation');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true); // Mostrar mensaje de "Copiado"
        setTimeout(() => setCopied(false), 2000); // Ocultar mensaje después de 2 segundos
      })
      .catch(() => {
        console.error(t('Error al copiar el texto'));
      });
  };

  return (
    <div className="flex flex-col items-center gap-y-8 text-blueLightWedding dark:text-blueWedding">
      <div className="text-xl text-center w-2/3">
        {t(
          'Tu presencia es nuestro mayor regalo... pero si te apetece apoyarnos en nuestra nueva andadura te facilitamos opciones.'
        )}
      </div>
      <div className="relative flex flex-col items-center justify-center w-2/3 h-96">
        <div className="absolute flex flex-col justify-between gap-4 text-2xl text-blueLightWedding dark:text-blueWedding border border-blueWedding shadow-xl text-center w-full p-8 rounded-xl">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-center">
              {t('Transferencia Bancaria')}
            </div>
            <div className="flex items-center justify-between p-4 font-normal rounded-xl border border-blueWedding w-2/3">
              ES04 2100 2383 2801 0018 7780
              {!copied ? (
                <button
                  className="text-blueLightWedding dark:text-blueWedding relative"
                  onClick={() =>
                    copyToClipboard('ES04 2100 2383 2801 0018 7780')
                  }
                  aria-label={t('Copiar número de cuenta')}
                >
                  <Copy />
                </button>
              ) : (
                <span className="text-sm text-green-500">
                  {t('Copiado')}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-center">{t('Bizum')}</div>
            <div className="font-normal p-4 rounded-xl border border-blueWedding w-2/3">
              +34 630940492
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftContent;
