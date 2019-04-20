import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

export default class NetworksList extends Component {

    props = {
        networks: this.props.networks
    }
    
  logOn() {}

  logOff() {}

  render() {

    const { networks } = this.props
    console.log('network_list', networks)
    return (
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className="networksListTitle">
        Networks List
        </Typography>
        <div className="networksList">
          {
            networks.map((network, i) => (
              <ListItem>
               <ListItemText primary={network} />
              </ListItem>
            ))
          }
        </div>
      </Grid>
    );
  }
}
