import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    display: 'inline-block',
    margin: '5px'
  },
});

const Event = (props) => {
  const { name, imgUrl, eType } = props.event;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/addEvent/${eType}`}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={imgUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </Link>

      </CardActionArea>
    </Card>
  );
};

export default Event;