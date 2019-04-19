import React, { Component } from 'react';
import './App.css';
import ChannelButton from './components/open_channel.jsx';
import NetworksList from './components/networks_list';

const networks = [0, 1]

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NetworksList networks={ networks }/>
          <ChannelButton />
        </header>
      </div>
    );
  }
}

export default App;
