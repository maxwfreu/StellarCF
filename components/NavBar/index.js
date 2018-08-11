import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "../../styles/styles.scss"


const styles = theme => ({
  flex: {
    flexGrow: 1,
    textAlign: 'center',
  },
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="/">Home</Button>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Stellar Crowdfund
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}


NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
