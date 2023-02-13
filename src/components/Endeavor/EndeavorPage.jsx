import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EndeavorItem from '../EndeavorItem/EndeavorItem';
import Icons from '../Icons';
import { Grid } from '@mui/material';
import { MoveDown } from '@mui/icons-material';

function EndeavorPage() {
    const dispatch = useDispatch();
    const endeavor = useSelector(store => store.endeavor);

    useEffect(() => {
        dispatch({ type: 'FETCH_ENDEAVOR' });
    }, [dispatch]);


    return (
        <>
        <Icons />
        <h1> Curent Projects </h1>
        <h4> Click on 'Show Endeavor' to see details about this project </h4>
        <Grid container spacing={{ 
                
            }} 
            columns={{ 
                
                }}>
            {endeavor?.map(endeavor => (
                <EndeavorItem key={endeavor.id} endeavor={endeavor} />
            ))}
        </Grid>
        </>
    );
}

export default EndeavorPage;
