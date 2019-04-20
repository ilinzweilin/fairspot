import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  fab: {
    position: 'absolute',
    right: theme.spacing.unit * 3,
    width: '75px',
    height: '75px',
    fontSize: '1rem',
    cursor: 'default'
  }
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  render() {
    const { classes, balance } = this.props;
  
    return (
      <div className={classes.root}>
            <Fab className={classes.fab} color='primary'>
              {balance} ETC
            </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(FloatingActionButtonZoom);
