import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UseDispatch, useDispatch } from 'react-redux';
import { addProducts } from '../../redux/slices/product'

export default function MediaCard({product}) {
const {title, image, id, price, description} = product
const { count } = product.rating
const dispatch = useDispatch()

  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{
            padding: "0 0 50px"
        }} variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography sx={{color: "black", fontWeight: "600", position: 'absolute', left: 13, bottom: 55}} variant="p" color="text.secondary">
           Цена товара: {price} $
        </Typography>
        <Typography sx={{ position: 'absolute', right: 13, bottom: 17}} variant="body2" color="text.secondary">
           Количество: {count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => dispatch(addProducts({title,id, image, count: 1, price}))} sx={{position: 'absolute', bottom: 10, left: 10}} size="small">Добавить в корзину</Button>
      </CardActions>
    </Card>
  );
}