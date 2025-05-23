import PropTypes from 'prop-types';

const Destination = ({ image, title, text, buttonText, url }) => {
  return (
    <div className="relative flex flex-col items-center justify-center md:w-[470px] h-80">
      <img
        className="object-cover w-full h-full rounded-xl"
        src={image}
        alt={title}
      />
      <div className="absolute flex flex-col justify-between gap-4 text-2xl text-white bg-blueLightWedding/70 text-center w-full h-full p-8 rounded-xl">
        <div className="md:text-5xl text-4xl font-bold underline underline-offset-8 uppercase">
          {title}
        </div>
        {text ? (
          <div className="text-xl text-center w-full h-full p-8 rounded-xl">
            {text}
          </div>
        ) : null}
        {url ? (
          <button
            onClick={() => window.open(url, '_blank')}
            className="border border-blueLightWedding text-4xl bg-white text-blueLightWedding font-bold py-4 px-12 rounded-lg shadow-lg hover:bg-blueLightWedding hover:text-white hover:shadow-xl transition duration-300"
          >
            {buttonText}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Destination;

Destination.defaultProps = {
  image: '',
  title: '',
  text: '',
  buttonText: '',
  url: '',
};
Destination.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  url: PropTypes.string,
};
