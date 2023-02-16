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
        sx={{fontSize: 24,
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
        color: '#FFD30B',
        paddingLeft: 63,
        marginLeft: 50,
        display: 'inline-flex',
        margin: 6,
        fontSize: 40}} onClick={showAddEndeavor}>add_circle</Icon>
    
    </Box>
);
}