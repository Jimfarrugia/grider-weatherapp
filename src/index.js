import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      errorMessage: '',
    }
    this.getLatitude();
  }

  getLatitude = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    const { latitude, errorMessage } = this.state;

    return (
      <>
        {
          errorMessage && !latitude &&
          <p>Error: {errorMessage}</p>
        }
        {
          !errorMessage && latitude &&
          <p>Latitude: {latitude}</p>
        }
        {
          !errorMessage && !latitude &&
          <p>Loading...</p>
        }
      </>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));