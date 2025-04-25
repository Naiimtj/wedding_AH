import PropTypes from 'prop-types';

const Option = ({ imagen, title, text, buttonText, url }) => {
  return (
    <div className="relative flex flex-col items-center justify-center md:mt-8 md:w-1/2 w-[320px] md:h-96 h-80">
      <img
        className="object-cover w-full h-full rounded-xl"
        src={imagen}
        alt={title}
      />
      <div className="absolute flex flex-col justify-between gap-4 text-2xl text-white bg-blueLightWedding/80 text-center w-full h-full p-8 rounded-xl">
        <div className="text-5xl font-bold underline underline-offset-8 uppercase">
          {title}
        </div>
        {text ? (
          <div className="text-xl text-center w-full h-full lg:p-8 rounded-xl">
            {text}
          </div>
        ) : null}
        {url ? (
          <button
            onClick={() => window.open(url, '_blank')}
            className="border border-blueLightWedding md:text-4xl bg-white text-blueLightWedding font-bold md:py-4 md:px-12 rounded-lg shadow-lg hover:bg-blueLightWedding hover:text-white hover:shadow-xl transition duration-300"
          >
            {buttonText}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Option;

Option.defaultProps = {
  imagen: '',
  title: '',
  text: '',
  buttonText: '',
  url: '',
};
Option.propTypes = {
  imagen: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  url: PropTypes.string,
};
