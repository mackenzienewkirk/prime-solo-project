import React from 'react';
import { useHistory } from 'react-router-dom';
// import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


function EndeavorItem({ endeavor }) {
    const history = useHistory();
    
//On click of 'Details' takes you to the details page
    const showEndeavorDetails = () => {
        history.push(`/endeavor/${endeavor.id}`);
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
    <Card sx={{
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
        textAlign: 'center',
        marginLeft: 12,
        marginTop: 2
        
    }} onClick={showEndeavorDetails} size="small">Details</Button>
    {/* </CardActions> */}
    </Card>

    )


}

export default EndeavorItem;

