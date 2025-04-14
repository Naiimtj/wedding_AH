import PropTypes from "prop-types";

const SectionContainer = ({ id, className, children }) => {
  return (
    <section
      id={id}
      data-section={id}
      className={`section ${className} scroll-m-20 w-full mx-auto container `}
    >
      {children}
    </section>
  );
};

export default SectionContainer;

SectionContainer.defaultProps = {
  id: "",
  className: "",
  children: [],
};

SectionContainer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};
