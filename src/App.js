import React, { Component } from 'react'
import './App.css'
import ChannelButton from './components/open_channel.jsx'
import NetworksList from './components/networks_list'
import TokenBalance from './components/data_stats';
const {
  connectToSpot,
  disconnectFromSpot,
  findSpots,
  startSpotting
} = require('./spot')



class App extends Component {

  componentDidMount () {
    this.loadData()
  }

  loadData = async () => {
    let networks = await findSpots()
    this.setState({networks})
  }

  loadNetworks = () =>  {
    return (
      <NetworksList networks={ this.state.networks }/>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        { this.loadNetworks() }
          <ChannelButton />
          <TokenBalance />
        </header>
      </div>
    )
  }
}

export default App
