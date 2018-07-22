import React from 'react';
import { DrumPad } from './DrumPad';

export class DrumMachine extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown() {
    console.log('keydown');

  }
  render() {
    const pads = [
      { key: 'Q', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2F4.wav?1532262750313' },
      { key: 'W', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2F1.wav?1532262880757' },
      { key: 'E', src: '' },
      { key: 'A', src: '' },
      { key: 'S', src: '' },
      { key: 'D', src: '' },
      { key: 'Z', src: '' },
      { key: 'X', src: '' },
      { key: 'C', src: '' },
    ];
    return (
      <div id="drum-machine">
        <div id="display"></div>
        {
          pads.map(pad =>
            <DrumPad pad={pad} key={pad.key} />
          )
        }
      </div>
    );
  }
}
