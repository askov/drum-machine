import React from 'react';

export class HoldButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  componentDidMount() {
    this.interval = null;
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleMouseDown() {
    this.interval = setInterval(this.props.handleHold, 80)
  }
  handleMouseUp() {
    clearInterval(this.interval);
  }
  handleMouseOut() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div
        role="button"
        className={this.props.class}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseOut={this.handleMouseOut}
        onTouchStart={this.handleMouseDown}
        onTouchEnd={this.handleMouseUp}
      ></div>
    );
  }
}
