import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import NetworkToggle from "./toggle_on"

export default class NetworksList extends Component {

  props = {
      networks: this.props.networks
  }
  state = {
      connected: false
  }
    
  logOn() {}

  logOff() {}

  showNetworksList() {
    const { networks } = this.props
    console.log('network_list', networks)
      return (
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className="networksListTitle">
          Connect to a spot
          </Typography>
          <Typography >
          Pay 1 ETC / 100 Kbyte 
          </Typography>
          <div className="networksList">
            {
              networks.map((network, i) => (
                <ListItem>
                  <ListItemText primary={network} />
                  <ListItemSecondaryAction>
                    <NetworkToggle />
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            }
          </div>
        </Grid>
      )
  }

  showDataStats() {

  }

  render() {
    if (!this.state.connected) {
        return (
           <div>
               { this.showNetworksList() }
           </div> 
        )
    } else {
        return (
            <div>
                { this.showDataStats() }
            </div> 
         )
    }
  }
}
