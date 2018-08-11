import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgress from '@material-ui/core/LinearProgress';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Steps from '../Steps';

const styles = theme => ({
  card: {
    width: '95%',
    margin: theme.spacing.unit,
    margin: '0 auto',
    height: '1000px',
  },
  people: {
    display: 'flex',
    flexDirection: 'row',
  },
  typography: {
    marginTop: theme.spacing.unit,
  }
});

class DetailsCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className={classes.typography}>
            60% Funded
          </Typography>
          <LinearProgress variant="buffer" value={60} valueBuffer={40} />
          <Typography className={classes.typography} gutterBottom component="p" variant="subheading">
            Backers:
          </Typography>
          <div className={classes.people}>
            <Avatar alt="Remy Sharp" src="/static/images/people/image-1.png" className={classes.avatar} />
            <Avatar alt="Remy Sharp" src="/static/images/people/image-2.png" className={classes.avatar} />
            <Avatar alt="Remy Sharp" src="/static/images/people/image-3.png" className={classes.avatar} />
            <Avatar alt="Remy Sharp" src="/static/images/people/image-4.png" className={classes.avatar} />
          </div>
          <Typography component="p" className={classes.typography}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <Typography className={classes.typography} gutterBottom component="p" variant="headline">
            How we plan to get there
          </Typography>
          <Steps />
        </CardContent>
      </Card>
    );
  }
}


DetailsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsCard);
