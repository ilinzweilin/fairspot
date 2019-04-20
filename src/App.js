import React, { Component } from 'react'
import './App.css'
import ChannelButton from './components/open_channel.jsx'
import NetworksList from './components/networks_list'
import TokenBalance from './components/data_stats';

// const { NetworkOnlyConnector } = Connectors

// const localNode = new NetworkOnlyConnector({
//     providerURL: 'http://127.0.0.1:8545'
//   })

// const connectors = { localNode }

/*const {
  connectToSpot,
  disconnectFromSpot,
  findSpots,
  startSpotting
} = require('./spot')
*/


class App extends Component {

  state = {
    networks: [],
    account: undefined
  }


  componentDidMount () {
    this.loadData()
  }

  loadData = async () => {
    let networks = ["hi", "hi2"]
    //await findSpots()
    this.setState({ networks })

    const geth = await window.grid.getClient('geth')
    if (geth) {
      try {
        const accounts = await geth.sendRpc('eth_accounts')
        } catch (err) {
          console.log("error", err)
        }
    }
      /*raiden public key
      const raidenAccount = account.find(account => account === )
      if (accounts) {
        this.setState({
          account: account
        })
      }
    } catch (err) {
      this.setState({
        error: err.message
      })
    }
    */
  }

  loadNetworks = () =>  {
    return (
      <NetworksList networks={ this.state.networks }/>
    )
  }

  render() {
    return (
      // <Web3Provider
      // connectors={ connectors }
      // libraryName={ 'ethers.js'|'web3.js'|null }
      // >
    <div className="App">
        <header className="App-header">
        { this.loadNetworks() }
          <ChannelButton />
          <TokenBalance />
        </header>
      </div>
    // </Web3Provider>
    )
  }
}

export default App
