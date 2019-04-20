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
    web3.defaultAccount = '0xAba205cC413435B646463dCEeaDc1492c184BF3d'

    const weiBalance = await web3.eth.getBalance(web3.eth.defaultAccount)
    const ethBalance = web3.utils.fromWei(weiBalance)
    const balance = (ethBalance/0.005449266175824176).toFixed(3)
    console.log("balance", web3.eth.defaultAccount, balance)
    this.setState({ balance })
  }

  loadData = async () => {

    const networks = [ { mac: 'f4:4e:05:0d:ab:0f',
    ssid: 'ETHCapeTownWifi',
    channel: '64',
    signal_level: '-58',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '74:a0:2f:b7:bd:0f',
    ssid: 'ETHCapeTownWifi',
    channel: '56',
    signal_level: '-75',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '74:a0:2f:b7:bd:0e',
    ssid: 'ETHGlobalWifi',
    channel: '56',
    signal_level: '-75',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:43:81:0e',
    ssid: 'ETHGlobalWifi',
    channel: '52',
    signal_level: '-69',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:43:81:0f',
    ssid: 'ETHCapeTownWifi',
    channel: '52',
    signal_level: '-68',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:0d:ab:01',
    ssid: 'ETHGlobalWifi',
    channel: '11',
    signal_level: '-58',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:0d:ab:00',
    ssid: 'ETHCapeTownWifi',
    channel: '11',
    signal_level: '-58',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '42:52:cb:4a:9f:99',
    ssid: 'DIRECT-XKLAPTOP-H6EGT3LPmssH',
    channel: '11',
    signal_level: '-48',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f0:0f:ec:75:b6:ba',
    ssid: 'Letlotlo Mobile WiFi',
    channel: '9,-1',
    signal_level: '-48',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:43:7f:21',
    ssid: 'ETHGlobalWifi',
    channel: '6',
    signal_level: '-62',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '74:a0:2f:ad:b7:30',
    ssid: 'ETHCapeTownWifi',
    channel: '6',
    signal_level: '-78',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '74:a0:2f:b7:bd:01',
    ssid: 'ETHGlobalWifi',
    channel: '6',
    signal_level: '-75',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '62:45:bd:ed:2a:b9',
    ssid: 'DIRECT-MMYmszL',
    channel: '6',
    signal_level: '-50',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '74:a0:2f:ad:b7:31',
    ssid: 'ETHGlobalWifi',
    channel: '6',
    signal_level: '-78',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '30:89:d4:2e:3e:f0',
    ssid: 'okratandoori',
    channel: '6',
    signal_level: '-66',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:43:7f:20',
    ssid: 'ETHCapeTownWifi',
    channel: '6',
    signal_level: '-61',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '30:89:d4:74:53:00',
    ssid: 'GlocalMe_18317',
    channel: '4',
    signal_level: '-55',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:7a:66:61',
    ssid: 'ETHGlobalWifi',
    channel: '1',
    signal_level: '-79',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:7a:66:60',
    ssid: 'ETHCapeTownWifi',
    channel: '1',
    signal_level: '-77',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:43:81:01',
    ssid: 'ETHGlobalWifi',
    channel: '1',
    signal_level: '-56',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:43:81:00',
    ssid: 'ETHCapeTownWifi',
    channel: '1',
    signal_level: '-58',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '74:a0:2f:ad:b7:3e',
    ssid: 'ETHGlobalWifi',
    channel: '36',
    signal_level: '-70',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: '74:a0:2f:ad:b7:3f',
    ssid: 'ETHCapeTownWifi',
    channel: '36',
    signal_level: '-69',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:7a:66:6e',
    ssid: 'ETHGlobalWifi',
    channel: '40',
    signal_level: '-80',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:7a:66:6f',
    ssid: 'ETHCapeTownWifi',
    channel: '40',
    signal_level: '-80',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:43:7f:2e',
    ssid: 'ETHGlobalWifi',
    channel: '40',
    signal_level: '-57',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' },
  { mac: 'f4:4e:05:43:7f:2f',
    ssid: 'ETHCapeTownWifi',
    channel: '40',
    signal_level: '-57',
    security: 'WPA2(PSK/AES/AES)',
    tokenAddress: 'partner',
    partnerAddress: 'token' } ]
    this.setState({ networks })

    const geth = await window.grid.getClient('geth')
    if (geth) {
      try {
        const accounts = await geth.sendRpc('eth_accounts')
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
