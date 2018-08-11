import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar';
import Footer from '../Footer';
import "../../styles/styles.scss"

const styles = {
  root: {
   	flex: '1 0 auto',
    minHeight: 'calc(100vh - 80px)',
  },
};

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
   		<React.Fragment>
        <div className={classes.root}>
          <NavBar />
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}


Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object,
};

export default withStyles(styles)(Layout);
