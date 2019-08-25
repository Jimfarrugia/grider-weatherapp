import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
    }
    this.getLatitude();
  }

  getLatitude = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => console.log(err)
    );
  }

  render() {
    const { latitude } = this.state;

    return (
      <div>
        Latitude: {latitude}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));