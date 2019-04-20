import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Web3 from 'web3'
import abi from 'human-standard-collectible-abi'

export default class TokenBalance extends Component {

    


  getTokenBalance() {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    const addr = web3.eth.accounts[0]
    const collectible = web3.eth.contract(abi).at(0x396764f15ed1467883A9a5B7D42AcFb788CD1826)

    collectible.balanceOf.call(addr, function (err, bal) {
        if (err) { console.error(err) }
        console.log('balance is ' + bal.toString(10))
      })
  }

  render() {
    return(
      <Button variant="contained" color="primary" onClick={this.getTokenBalance}>
      Get Token Balance
      </Button>
    )
  }
}