import PropTypes from 'prop-types';

const CardCountdown = ({ timeLeft, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-3xl font-semibold bg-white dark:bg-white/15 text-blueLightWedding dark:text-blueWedding rounded-lg md:h-48 md:w-40 px-4 py-2 shadow-lg">
      <div className="md:text-7xl text-4xl">{timeLeft}</div>
      <p>{text}</p>
    </div>
  );
};

export default CardCountdown;

CardCountdown.defaultProps = {
  timeLeft: 0,
  text: '',
};
CardCountdown.propTypes = {
  timeLeft: PropTypes.number,
  text: PropTypes.string,
};
