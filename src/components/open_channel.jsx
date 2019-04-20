import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import {
  openPaymentChannel,
  closePaymentChannel,
  addPaymentInformation,
  submitPayment
} from './payment'

export default class ChannelButton extends Component {

  openChannel() {
    // openPaymentChannel(partneraddress, tokenaddress, totaldeposit, settletimeout)
  }

  render() {
    return(
      <Button variant="contained" color="primary" onClick={this.openChannel}>
      Open Channel
      </Button>
    )
  }
}