import React from 'react';

export class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'drum-display' + (this.props.power ? ' drum-display--on' : '')} id="display">
        {this.props.text}
      </div>
    );
  }
}
