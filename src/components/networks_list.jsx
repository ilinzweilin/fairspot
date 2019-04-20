import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import NetworkToggle from "./toggle_on";

export default class NetworksList extends Component {

    props = {
        networks: this.props.networks
    }

    state = {
        dense: false,
        secondary: false,
      };
    
  logOn() {}

  logOff() {}

  generate(element) {
    return this.props.networks.map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  render() {

    const { dense, secondary } = this.state;
    const { networks } = this.props
    const network = networks[0]

    return (
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className="networksListTitle">
        Networks List
        </Typography>
        <div className="networksList">
          <List dense={dense}>
            {this.generate(
              <ListItem>
                <ListItemText
                  primary={network}
                  secondary={secondary ? "Secondary text" : null}
                />
                <ListItemSecondaryAction>
                    <NetworkToggle />
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </List>
        </div>
      </Grid>
    );
  }
}
