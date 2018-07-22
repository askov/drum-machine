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
      65: 'Q',
      83: 'W',
      68: 'E',
      90: 'Z',
      88: 'X',
      67: 'C',
    };
    if (Object.keys(keymap).includes(keyCode)) {
      const audio = document.getElementById(keymap[keyCode]);
      if (!audio) return;
      this.playAudio(audio);
      this.updateDisplay(audio.dataset.name);
      // this.setState({ display: audio.dataset.name })
    }
  }

  render() {
    const pads = [
      { key: 'Q', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2Fcymbal.wav?1532270251164', name: 'cymbal' },
      { key: 'W', src: '', name: '2' },
      { key: 'E', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2Fhi-hat.wav?1532269528250', name: 'hi-hat' },
      { key: 'A', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2Fkick.wav?1532269631770', name: 'kick' },
      { key: 'S', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2Fsnare-clap.wav?1532269735085', name: 'snare clap' },
      { key: 'D', src: '', name: '6' },
      { key: 'Z', src: '', name: '7' },
      { key: 'X', src: '', name: '8' },
      { key: 'C', src: '', name: '9' },
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
