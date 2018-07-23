import React from 'react';

export class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.handlePadClick = this.handlePadClick.bind(this);
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
      > <span>{this.props.pad.key}</span>
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
