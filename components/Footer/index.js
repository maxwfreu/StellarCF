import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "../../styles/styles.scss"


const styles = theme => ({
  footer: {
    flexShrink: 0,
    backgroundColor: 'gray',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: '#fff',
    textAlign: 'center',
  }
});

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
      <p className={classes.bottomText}>
        Made By Me
      </p>
      </footer>
    );
  }
}


Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
