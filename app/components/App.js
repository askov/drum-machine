import React from 'react';
import styles from '../assets/styles/style.scss';

import { DrumMachine } from './DrumMachine';

export class App extends React.Component {
  render() {
    return (
      <div>
        <DrumMachine />
      </div>
    );
  }
}
