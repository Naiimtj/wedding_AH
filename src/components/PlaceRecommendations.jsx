const PlaceRecommendations = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-y-8 mt-8">
      <img
        className="object-cover md:w-2/3 w-full rounded-xl"
        src={'/Hotel-Z.webp'}
        alt={'Hadil & Álex'}
      />
      <div className="md:text-2xl text-xl text-blueLightWedding bg-blueWedding/10 text-center md:w-3/4 md:p-8 p-4 rounded-xl">
        La boda durará toda la noche, y por lo tanto tendrás que alojarte en
        Meknes por lo menos una noche. Nuestra recomendación es que te alojes en
        el <a
          href="https://www.booking.com/Share-EwrKKmi"
          target="_blank"
          className="hover:text-white hover:bg-blueLightWedding hover:font-bold hover:underline hover:underline-offset-2"
        >
          {' " '}Hotel Z de Meknes{' " '}
        </a> a unos 8km del sitio de la boda. Es un hotel perfectamente equipado y
        cómodo.
      </div>
      <button
        onClick={() =>
          window.open('https://www.booking.com/Share-EwrKKmi', '_blank')
        }
        className="border border-blueLightWedding text-4xl bg-white text-blueLightWedding font-bold py-4 px-12 rounded-lg shadow-lg hover:bg-blueLightWedding hover:text-white hover:shadow-xl transition duration-300"
      >
        Hotel Z
      </button>
    </div>
  );
};

export default PlaceRecommendations;
