import React from 'react';
import PropTypes from 'prop-types';
import { HoldButton } from './HoldButton';
import { PowerButton } from './PowerButton';

export class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="button-panel">
        <PowerButton buttonClass={'power-button round-button' + (this.props.power ? ' round-button--on' : '')} />
        <HoldButton
          handleHold={this.props.handleVolumeDown}
          class={'vol-minus round-button' + (this.props.power ? ' round-button--on' : '')} />
        <HoldButton
          handleHold={this.props.handleVolumeUp}
          class={'vol-plus round-button' + (this.props.power ? ' round-button--on' : '')} />
      </div>
    );
  }
}


ButtonPanel.propTypes = {
  handlePowerClick: PropTypes.func.isRequired,
  handleVolumeUp: PropTypes.func.isRequired,
  handleVolumeDown: PropTypes.func.isRequired,
  power: PropTypes.bool.isRequired,
};
