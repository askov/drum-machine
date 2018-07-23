import React from 'react';
import { DrumPad } from './DrumPad';
import { Display } from './Display';

export class DrumMachine extends React.Component {
  constructor() {
    super();
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
      display: 'none',
      kit: [
        { key: 'Q', active: false, src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20CLHH.wav?1532352722339', name: 'CLHH' },
        { key: 'W', active: false, src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20SNR%20D1.wav?1532352722730', name: 'SNR D1' },
        { key: 'E', active: false, src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20RIM%20SHT.wav?1532352722795', name: 'RIM SHT' },
        { key: 'A', active: false, src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20SNR%20D2.wav?1532352722873', name: 'SNR D2' },
        { key: 'S', active: false, src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20RIDE.wav?1532352722922', name: 'RIDE' },
        { key: 'D', active: false, src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20TOM1.wav?1532352723451', name: 'TOM1' },
        { key: 'Z', active: false, src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20TOM2.wav?1532352723760', name: 'TOM2' },
        { key: 'X', active: false, src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20COWBELL.wav?1532352724065', name: 'COWBELL' },
        { key: 'C', active: false, src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20OPHH.wav?1532352724689', name: 'OPHH' },
      ]
    };
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);
  }
  playAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
  updateDisplay(text) {
    this.setState({ display: text });
  }
  mapKeyCode(code) {
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
    return keymap[code]
  }
  handleKeyUp(e) {
    const x = this.mapKeyCode(e.keyCode);
    this.deactivatePad(x);
  }
  handleKeyDown(e) {
    const x = this.mapKeyCode(e.keyCode);
    this.activatePad(x);
    if (x) {
      const audio = document.getElementById(x);
      if (!audio) return;
      audio.click();
      this.updateDisplay(audio.dataset.name);
    }
  }
  activatePad(key) {
    this.setState({
      kit: this.state.kit.map(el => {
        return el.key === key ? Object.assign({}, el, { active: true }) : el;
      })
    });
  }
  deactivatePad(key) {
    this.setState({
      kit: this.state.kit.map(el => {
        return el.key == key ? Object.assign({}, el, { active: false }) : el;
      })
    });
  }

  render() {
    return (
      <div id="drum-machine" className="drum-machine-body">
        <Display text={this.state.display} />
        <div className="drum-pad-container">
          {
            this.state.kit.map(pad =>
              <DrumPad pad={pad} key={pad.key} play={this.playAudio} />
            )
          }
        </div>
      </div>
    );
  }
}
