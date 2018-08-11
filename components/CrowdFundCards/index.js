import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../../styles/styles.scss"


const styles = theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing.unit * 2,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  card: {
    width: '45%',
    margin: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      width: '30%',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class CrowdFundCards extends React.Component {
  constructor(props) {
    super(props);
    this.renderCard = this.renderCard.bind(this);
  }

  renderCard() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/testimg.jpg"
          title="Test Image"
        />
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
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.renderCard()}
        {this.renderCard()}
        {this.renderCard()}
        {this.renderCard()}
      </div>
    );
  }
}


CrowdFundCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CrowdFundCards);
