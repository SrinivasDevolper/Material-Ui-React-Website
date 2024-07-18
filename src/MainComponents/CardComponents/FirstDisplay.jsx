import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FirstDisplay() {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "20px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/premium-photo/group-office-workers-who-work-teams-by-working-looking-laptops-together-with-smiles-office-by-having-city-buildings-background-teamwork-office-workers-concept_35150-3064.jpg"
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
