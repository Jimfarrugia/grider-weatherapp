import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends Component {

  state = {
    latitude: null,
    errorMessage: '',
  }

  componentDidMount = () => {
    // get latitude
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
          <SeasonDisplay latitude={latitude} />
        }
        {
          !errorMessage && !latitude &&
          <Spinner message="Awaiting permissions..." />
        }
      </>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));