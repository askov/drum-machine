import React from 'react';
import PropTypes from 'prop-types';

export class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.handlePadClick = this.handlePadClick.bind(this);
  }
  componentDidMount() {
    this.audioRef.current.volume = this.props.volume / 100;
  }
  handlePadClick() {
    this.props.play(this.audioRef.current);
  }
  render() {
    return (
      <div
        role="button" tabIndex="-1"
        className={'drum-pad' + (this.props.pad.active ? ' drum-pad--active' : '')}
        onClick={this.handlePadClick}
      >
        <span>{this.props.pad.key}</span>
        <audio
          src={this.props.pad.src}
          data-name={this.props.pad.name}
          id={this.props.pad.key}
          preload="true"
          ref={this.audioRef}></audio>
      </div>
    );
  }
}

DrumPad.propTypes = {
  volume: PropTypes.number.isRequired,
  pad: PropTypes.object.isRequired,
  play: PropTypes.func.isRequired,
};