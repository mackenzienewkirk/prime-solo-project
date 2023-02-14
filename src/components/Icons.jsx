import * as React from 'react';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import { useHistory } from 'react-router-dom';


export default function Icons() {
    const history = useHistory();
    const showAddEndeavor = (endeavor) => {
        history.push(`/add`);
    }
    return (
        <Box
        sx={{marginTop: -4,
            backgroundColor: '#ffd3db',
        '& > :not(style)': {
            m: 1,
        },
    }}
    >
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
    <Icon sx={{ 
        color: '#8c3839',
        paddingLeft: 70,
        margin: 5,
        fontSize: 30}} onClick={showAddEndeavor}>add_circle</Icon>
    
    </Box>
);
}