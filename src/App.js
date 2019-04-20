import React, { Component } from 'react'
import './App.css'
import ChannelButton from './components/open_channel.jsx'
import NetworksList from './components/networks_list'
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
        { loadNetworks() }
          <ChannelButton />
        </header>
      </div>
    )
  }
}

export default App
