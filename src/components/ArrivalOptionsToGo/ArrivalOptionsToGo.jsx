import Option from './Option';

const ArrivalOptionsToGo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-8">
      <div className="text-xl text-blueLightWedding bg-blueWedding/10 text-center md:w-3/4 p-4 rounded-xl">
        La opción más rápida para llegar a Meknes es ir vía Fez que está a 60km
        de Meknes. Recomendamos estas dos opciones para ir del aeropuerto de Fez
        hasta Meknes. Aunque en el aeropuerto se puede alquilar un coche, debes
        tener en cuenta que conducir en Marruecos no es fácil.
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-4">
        <Option imagen="/taxi-morroco.webp" title="Taxi" text="45 minutos desde aeropuerto a Meknes"/>
        <Option
          imagen="/tren-morroco.webp"
          title="Tren"
          text="(Taxi 30 minutos hasta estación de tren en Fez) Recomendamos comprar los billetes online"
          buttonText="Comprar billetes"
          url="https://www.oncf-voyages.ma/"
        />
      </div>
    </div>
  );
};

export default ArrivalOptionsToGo;
