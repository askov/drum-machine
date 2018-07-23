import React from 'react';
import { DrumPad } from './DrumPad';
import { Display } from './Display';

export class DrumMachine extends React.Component {
  constructor() {
    super();
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      display: 'none'
    };
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  playAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
  updateDisplay(text) {
    this.setState({ display: text });
  }
  handleKeyDown(e) {
    const keyCode = `${e.keyCode}`;
    console.log('keydown', e.keyCode);
    const keymap = {
      81: 'Q',
      87: 'W',
      69: 'E',
      65: 'A',
      83: 'S',
      68: 'D',
      90: 'Z',
      88: 'X',
      67: 'C',
    };
    if (Object.keys(keymap).includes(keyCode)) {
      const audio = document.getElementById(keymap[keyCode]);
      console.log('AUDIO', audio);
      if (!audio) return;
      this.playAudio(audio);
      this.updateDisplay(audio.dataset.name);
      // this.setState({ display: audio.dataset.name })
    }
  }

  render() {
    const pads = [
      { key: 'Q', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20CLHH.wav?1532352722339', name: 'CLHH' },
      { key: 'W', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20SNR%20D1.wav?1532352722730', name: 'SNR D1' },
      { key: 'E', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20RIM%20SHT.wav?1532352722795', name: 'RIM SHT' },
      { key: 'A', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20SNR%20D2.wav?1532352722873', name: 'SNR D2' },
      { key: 'S', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20RIDE.wav?1532352722922', name: 'RIDE' },
      { key: 'D', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20TOM1.wav?1532352723451', name: 'TOM1' },
      { key: 'Z', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20TOM2.wav?1532352723760', name: 'TOM2' },
      { key: 'X', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20COWBELL.wav?1532352724065', name: 'COWBELL' },
      { key: 'C', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20OPHH.wav?1532352724689', name: 'OPHH' },
    ];
    return (
      <div id="drum-machine">
        <Display text={this.state.display} />
        {
          pads.map(pad =>
            <DrumPad pad={pad} key={pad.key} play={this.playAudio} />
          )
        }
      </div>
    );
  }
}
