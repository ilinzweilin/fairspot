import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChannelButton from './components/open_channel.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ChannelButton />
        </header>
      </div>
    );
  }
}

export default App;
