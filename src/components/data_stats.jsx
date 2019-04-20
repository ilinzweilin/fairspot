import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Web3 from 'web3'

export default class TokenBalance extends Component {

  async getTokenBalance() {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
    web3.defaultAccount = '0xAba205cC413435B646463dCEeaDc1492c184BF3d'

    const weiBalance = await web3.eth.getBalance(web3.eth.defaultAccount)
    const balance = web3.utils.fromWei(weiBalance)
    // set the state of the balance component to this
  }

  render() {
    return(
      <Button variant="contained" color="primary" onClick={this.getTokenBalance}>
      Get Token Balance
      </Button>
    )
  }
}