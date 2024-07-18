import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SecondDisplay() {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/514321315/photo/diversity-that-makes-the-team-work.jpg?s=612x612&w=0&k=20&c=1Nf_npFRbhGCcJpVN6bbAiuIhFs5IYVflbah1Kk0w0M="
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
