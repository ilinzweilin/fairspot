import React, { Component } from 'react'
import './App.css'
import ChannelButton from './components/open_channel.jsx'
import NetworksList from './components/networks_list'
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
    console.log(networks)
    this.setState({ networks })

    const geth = await window.grid.getClient('geth')
    if (geth) {
      try {
        const accounts = await geth.sendRpc('eth_accounts')
        console.log("accounts", accounts)
        }catch (err) {
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


  render() {
    const { networks } = this.state
    return (
      <div className="App">
        <header className="App-header">
          {networks && <NetworksList networks={ networks }/>}
          <ChannelButton />
        </header>
      </div>
    )
  }
}

export default App
