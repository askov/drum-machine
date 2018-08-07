import React from 'react';
import PropTypes from 'prop-types';

export class VolumeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'volume-display' + (this.props.power ? ' volume-display--on' : '')}>
        Volume: {this.props.volume} %
      </div>
    );
  }
}

VolumeDisplay.propTypes = {
  power: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
};
