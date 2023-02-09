import React from 'react';
import { useHistory } from 'react-router-dom';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function EndeavorItem({ endeavor }) {
    const history = useHistory();

    const showEndeavorDetails = () => {
        history.push(`/endeavor/${endeavor.id}`);
    }
    
    return (
        <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        component="img"
        alt="title for id"
        height="140"
        image='images/corner_shelf.jpeg'
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {endeavor.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {endeavor.details}
        </Typography>
    </CardContent>
    <CardActions>
        <Button onClick={showEndeavorDetails} size="small">Learn More</Button>
    </CardActions>
    </Card>
        // <div>
        // <button onClick={showEndeavorDetails}>
        //     {endeavor.title}
        //     <img src='images/corner_shelf.jpeg'></img>
        // </button>
        // </div>

    )


}

export default EndeavorItem;





//MUI INFO

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function ImgMediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }