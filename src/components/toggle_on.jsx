import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default class NetworkToggle extends Component {

    props = {
        disabled: false,
        networkId: undefined,
        connectToNetwork: {},
        disconnectFromNetwork: {}
    }

    state = {
        open: false,
        hidden: false,
      }
    
      handleToggle = (event, hidden) => {
        const { networkId, disconnectFromNetwork, connectToNetwork } = this.props
        if (hidden) {
          console.log("hidden", networkId)
          connectToNetwork(networkId)

        } else {

          console.log("not hidden", networkId)
          disconnectFromNetwork()
        }
        this.setState(state => ({
            hidden,
            open: hidden ? false : state.open,
          }));
          console.log("toggled!")
      }

  render() {
      const { hidden } = this.state
      const { disabled } = this.props
      console.log('moin', disabled)
    return(
        <FormControlLabel
            control= {
                <Switch 
        checked={hidden}
        onChange={this.handleToggle}
        value="hidden"
        color="primary"
        disabled={disabled}
        /> 
            }
        />
    )
  }
}
