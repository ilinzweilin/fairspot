import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import NetworkToggle from "./toggle_on"

export default class NetworksList extends Component {

    props = {
        networks: this.props.networks
    }

    state = {
        dense: false,
        connected: false
    }
    
  logOn() {}

  logOff() {}

  generate(element) {
    return this.props.networks.map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    )
  }

  showNetworksList() {
        return (
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className="networksListTitle">
              Networks List
              </Typography>
              <div className="networksList">
                <List dense={this.state.dense}>
                  {this.generate(
                    <ListItem>
                      <ListItemText
                        primary={this.props.network[0]}
                      />
                      <ListItemSecondaryAction>
                          <NetworkToggle />
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
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
