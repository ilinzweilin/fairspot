import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default class NetworkToggle extends Component {

    state = {
        open: false,
        hidden: false,
      };
    

      handleToggle = (event, hidden) => {
        this.setState(state => ({
            hidden,
            open: hidden ? false : state.open,
          }));
          console.log("toggled!")
      }

  render() {
      const { hidden } = this.state
    return(
        <FormControlLabel
            control= {
                <Switch 
        checked={hidden}
        onChange={this.handleToggle}
        value="hidden"
        color="primary"
        /> 
            }
        />
    )
  }
}