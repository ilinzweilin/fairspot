import React, { Component } from 'react'
import './App.css'
import NetworksList from './components/networks_list'
import TokenBalance from './components/data_stats'
import BalanceButton from './components/balance_button'
import ConnectedSnackBar from './components/connected_snackbar'
import DisconnectedSnackBar from './components/disconnected_snackbar'
import Web3 from 'web3'

/*const {
  connectToSpot,
  disconnectFromSpot,
  findSpots,
  startSpotting
} = require('./spot')
*/

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
}

class App extends Component {

  state = {
    networks: [],
    account: undefined,
    connectedNetwork: undefined,
    balance: 0,
    connectedSnackBarOpen: false,
    disconnectedSnackBarOpen: false,
    kBytesConsumed:0,
    moneySpent:0
  }

  componentDidMount () {
    this.loadData()
    this.getTokenBalance()
  }

  getTokenBalance = async () => {

    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
    const account = await web3.eth.getAccounts()
    const weiBalance = await web3.eth.getBalance(account[0])
    const ethBalance = web3.utils.fromWei(weiBalance)
    const balance = (ethBalance/0.005449266175824176).toFixed(3)
    this.setState({ balance })

  }

  loadData = async () => {

    let networks = []
    try {
      networks = await window.spot.findSpots()    
    } catch (error) {
      console.log('error failed to load networks', error)
    }
    this.setState({ networks })
    /*
    const geth = await window.grid.getClient('geth')
    if (geth) {
      try {
        const accounts = await geth.sendRpc('eth_accounts')
        }catch (err) {
          console.log("error", err)
        }
    }
    */
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
      <NetworksList kBytesConsumed = {this.state.kBytesConsumed} moneySpent = {this.state.moneySpent} networks={ this.state.networks } connectToNetwork = {this.connectToNetwork} disconnectFromNetwork = {this.disconnectFromNetwork} connectedNetwork = { this.state.connectedNetwork} />
    )
  }

connectToNetwork = (networkId) => {
  this.setState({ 
    connectedNetwork : networkId,
    connectedSnackBarOpen : true,
    disconnectedSnackBarOpen : false,
  })
  this.hideConnectedSnackBar()
}

disconnectFromNetwork = () => {
  this.setState({ 
    connectedNetwork : undefined,
    connectedSnackBarOpen : false,
    disconnectedSnackBarOpen : true,
    kBytesConsumed: 0,
    moneySpoent: 0 })
  this.hideDisconnectedSnackBar()
}

hideConnectedSnackBar = () => {
  setTimeout(() => { 
    this.setState ({ connectedSnackBarOpen : false })
  }, 3000)  
}

hideDisconnectedSnackBar = () => {
  setTimeout(() => { 
    this.setState ({ disconnectedSnackBarOpen : false })
  }, 3000)  
}

  render() {
    return (
      <div className="App">

        <header className="App-header">
        { this.loadNetworks() }
        <ConnectedSnackBar open = {this.state.connectedSnackBarOpen}/>
        <DisconnectedSnackBar open = {this.state.disconnectedSnackBarOpen}/>
        </header>
        <BalanceButton balance = { this.state.balance}/>
  
      </div>
    )
  }
}

export default App
