import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Categories() {
  return (
    <div style={{margin: "1rem 4rem", display: "flex", justifyContent: "center"}}>
      
      <Card sx={{ width: 300 }} style={{margin: "2rem 1rem"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          style={{objectFit:"contain"}}
          image="https://s7280.pcdn.co/wp-content/uploads/2021/05/Top-Programming-Languages.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Programming language
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width: 300 }} style={{margin: "2rem 1rem"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          style={{objectFit:"contain"}}
          image="https://cdn1.vectorstock.com/i/1000x1000/35/35/white-technology-circle-and-computer-science-vector-22953535.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Computer Science Fundamentals
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width: 300 }} style={{margin: "2rem 1rem"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          style={{objectFit:"contain"}}
          image="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Tools and Frameworks
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width: 300 }} style={{margin: "2rem 1rem"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          style={{objectFit:"contain"}}
          image="https://www.shutterstock.com/image-vector/educational-mathematical-logic-game-maze-260nw-1557710597.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Math and Logic
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default Categories
