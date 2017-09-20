import React from 'react';
import PropTypes from 'prop-types';

import drawCircleProgress from './drawCircleProgress';

class ProgressCircle extends React.Component {
  componentDidMount() {
    const { canvas, percentText } = this;
    const { rate, width, height } = this.props;
    const ctx = canvas.getContext('2d');

    drawCircleProgress(
      ctx,
      percentText,
      { rate, width, height },
    );
  }
  render() {
    const {
      className,
      rate,
      width,
      height,
    } = this.props;

    return (
      <div className={`circle-progress ${className}`} alt={`Vote Average: ${rate}`}>
        <div className="percent">
          <span className="percent-number" ref={(text) => { this.percentText = text; }}>0</span>
        </div>
        <canvas className="canvas" ref={(canvas) => { this.canvas = canvas; }} width={width} height={height} />
      </div>
    );
  }
}

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
