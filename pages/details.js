import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Parallax, Background } from 'react-parallax';
import { withStyles } from '@material-ui/core/styles';
import "../styles/styles.scss"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Layout from '../components/Layout';

const styles = theme => ({
  backgroundImg: {
    height: '500px',
    width: '100%',
  },
  card: {
    width: '90%',
    margin: theme.spacing.unit,
    margin: '0 auto',
    height: '2000px',
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
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" variant="contained" color="secondary" href="/details">
                Learn More
              </Button>
            </CardActions>
          </Card>
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
