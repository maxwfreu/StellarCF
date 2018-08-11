import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Parallax, Background } from 'react-parallax';
import { withStyles } from '@material-ui/core/styles';
import DetailsCard from '../components/DetailsCard';
import Layout from '../components/Layout';
import "../styles/styles.scss"

const styles = theme => ({
  backgroundImg: {
    height: '500px',
    width: '100%',
  },
});

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Parallax strength={300}>
          <div className="details-main">
            <h1> Crowd Fund </h1>
            <h3> We are trying to save the world </h3>
          </div>
          <DetailsCard />
          <Background className={classes.backgroundImg}>
            <img src="/static/images/testimg.jpg" alt="fill murray" />
          </Background>
        </Parallax>
      </Layout>
    );
  }
}


Details.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);
