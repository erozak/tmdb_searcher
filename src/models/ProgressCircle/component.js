import PropTypes from 'prop-types';

const ProgressCircle = ({
  className,
  rate,
  width,
  height,
}) => (
  <div className={`circle-progress ${className}`} alt="Vote Average: {rate}">
    <div className="percent">
      <span className="percent-number">{rate}</span>
    </div>
    <canvas className="canvas" width={width} height={height} />
  </div>
);

ProgressCircle.propTypes = {
  className: PropTypes.string,
  rate: PropTypes.number.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

ProgressCircle.defaultProps = {
  className: '',
  width: 100,
  height: 100,
};

export default ProgressCircle;
