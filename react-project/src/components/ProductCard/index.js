import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {Link} from 'react-router-dom';
import './style.css';



export default function ProductCard(props) {

  return (
    <Card className='product-card'>
      <CardActionArea>
        <CardMedia
          className='product-card-image'
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link size="small" color="primary" to={`/bicycles/${props.id}`}>
          Learn More
        </Link>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}