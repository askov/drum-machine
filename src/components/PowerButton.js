import React from 'react';
import PropTypes from 'prop-types';

export class PowerButton extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div
        role="button"
        className={this.props.buttonClass}
        onClick={this.props.handlePowerClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256.026 0c-24.816 0-45.004 20.188-45.004 45.004V226.02c0 24.816 20.188 45.004 45.004 45.004s45.004-20.188 45.004-45.004V45.004C301.03 20.188 280.842 0 256.026 0z" fill="#933EC5" /><path d="M406.625 118.959c-18.939-17.083-46.502-15.14-63.041 1.873-16.632 17.109-17.917 46.086 3.153 65.296 33.44 30.395 50.343 76.459 42.336 122.928-10.868 63.067-65.717 112.767-133.05 112.915-68.971.152-121.809-50.77-132.708-110.617-8.497-46.747 7.179-93.553 41.972-125.197 21.01-19.127 19.913-48.232 3.234-65.36-16.567-17.013-44.295-18.851-63.4-1.56-52.909 47.923-80.527 118.769-72.843 190.58C44.496 423.995 140.9 512 256.553 512c114.326 0 207.934-88.216 222.368-194.743 10.064-74.23-16.964-148.358-72.296-198.298z" fill="#933EC5" /></svg>
      </div>
    );
  }
}

PowerButton.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  handlePowerClick: PropTypes.func.isRequired,
};
