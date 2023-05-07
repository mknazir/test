import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Cardutil({coursesdata}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/coursevideo/${coursesdata.id}`);
  }

  return (
    <Card sx={{ width: 345}} onClick={handleClick} style={{margin: "2rem 1rem"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={coursesdata.imagelink}
          alt="green iguana"
        />
        <CardContent sx={{paddingBottom: "1rem"}}>
          <Typography gutterBottom variant="h5" component="div">
            {coursesdata.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" height={150}>
            {coursesdata.Sdescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}