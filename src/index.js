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

  renderContent() {
    const { latitude, errorMessage } = this.state;

    if (errorMessage && !latitude) {
      return <p>Error: {errorMessage}</p>;
    }

    if (!errorMessage && latitude) {
      return <SeasonDisplay latitude={latitude} />;
    }

    return <Spinner message="Awaiting permissions..." />
  }

  render() {
    return (
      <div style={{ border: '10px solid red' }}>
        {this.renderContent()}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));