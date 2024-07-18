import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ThirdDisplay() {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.licdn.com/dms/image/D4D12AQGfKRFbQ4cIOA/article-cover_image-shrink_600_2000/0/1717825210496?e=2147483647&v=beta&t=enw-ujbWGDdMKGaopymXrfQjkTnAi9k-43AWs_px7dU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
