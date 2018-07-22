import React from 'react';

export class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.handlePadClick = this.handlePadClick.bind(this);
  }
  handlePadClick() {
    console.log('Click!', this.audioRef);
    // this.audioRef.current.stop();
    this.audioRef.current.pause();
    this.audioRef.current.currentTime = 0;
    this.audioRef.current.play();
  }
  render() {
    return (
      <div
        role="button"
        className="drum-pad"
        onClick={this.handlePadClick}
      >{this.props.pad.key}
        <audio
          src={this.props.pad.src}
          id={this.props.pad.key}
          preload="true"
          ref={this.audioRef}></audio>
      </div>
    );
  }
}
