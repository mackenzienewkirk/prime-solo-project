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

function EndeavorItem({ endeavor }) {
    const history = useHistory();
    const dispatch = useDispatch();
    
//On click of 'Details' takes you to the details page
    const showEndeavorDetails = () => {
        history.push(`/endeavor/${endeavor.id}`);
    }

//On click of 'Delete' deletes endeavor
    const deleteEndeavor = (id) => {
        dispatch({
        type: 'DELETE_ENDEAVOR',
        payload: id
        })
    }

    
    return (
        <Card sx={{ 
            width: 280,
            height: 120,
            backgroundColor: '#AEC9FF',
            color: '#46629A',
            gridTemplateColumns: 2,
            padding: 1,
            elevation: 5,
            boxShadow: 2,
            borderRadius: 4

            }}>
    {/* <CardMedia
        component="img"
        alt="title for id"
        height="100"
        width="300"
        image='images/in_the_works_logo.png'
    /> */}
    <Card sx={{
        textAlign: 'left',
        fontSize: 22,
        backgroundColor: '#FFFFFF',
        color: '#410064',
        lineHeight: 1,
        fontFamily: 'Rugrats Sans',
        padding: 2,
        lineHeight: 1,
        textAlign: 'center',
        borderRadius: 4
    }}>
        {endeavor.title}
        
    </Card>
    {/* <CardActions > */}
        <Button sx={{
        color: '#46629A',
        fontFamily: 'Rugrats Sans',
        fontSize: 18,
        padding: .5,
        marginLeft: 3,
        
    }} onClick={showEndeavorDetails} size="small">Details</Button>
        
        <Button sx={{
        color: '#46629A',
        fontFamily: 'Rugrats Sans',
        fontSize: 18,
        padding: 1,
        marginLeft: 7,
        
    }} onClick={() => deleteEndeavor(endeavor.id)}>Delete</Button>
    {/* </CardActions> */}
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

