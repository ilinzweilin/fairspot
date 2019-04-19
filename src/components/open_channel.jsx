import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class ChannelButton extends Component {

  openChannel() {
    // PUT /api/(version)/channels
    // "partner_address": "0x61C808D82A3Ac53231750daDc13c777b59310bD9",
    // "token_address": "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8",
    // "total_deposit": 35000000,
    // "settle_timeout": 500
    // Open channel API here
  }

  render() {
    return(
      <Button variant="contained" color="primary" onClick={this.openChannel}>
      Open Channel
      </Button>
    )
  }
}