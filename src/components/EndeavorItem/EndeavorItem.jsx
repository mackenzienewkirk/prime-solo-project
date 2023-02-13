import React from 'react';
import { useHistory } from 'react-router-dom';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { fontFamily } from '@mui/system';

function EndeavorItem({ endeavor }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const showEndeavorDetails = () => {
        history.push(`/endeavor/${endeavor.id}`);
    }

    const deleteEndeavor = (id) => {
        dispatch({
        type: 'DELETE_ENDEAVOR',
        payload: id
        })
    }
    
    return (
        <Card sx={{ 
            maxWidth: 345,
            color: '#336699',
            background: '#FAFAFA',
            border: 10,
            borderColor:'#FFD353',
            
            }}>
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
        <Typography sx={{variant: "body2", 
                    color: "text.secondary",
                    fontFamily: 'Rugrats Sans'}}>
        </Typography>
    </CardContent>
    <CardActions >
        <Button sx={{
        color: '#336699'
    }} onClick={showEndeavorDetails} size="small">Show Endeavor</Button>
        <Button sx={{
        color: '#336699'
    }} onClick={() => completeEndeavor(endeavor.id)}>Complete</Button>
        <Button sx={{
        color: '#336699'
    }} onClick={() => deleteEndeavor(endeavor.id)}>Delete</Button>
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

