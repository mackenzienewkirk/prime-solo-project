import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EndeavorItem from '../EndeavorItem/EndeavorItem';
import Icons from '../Icons';
import { Card, Grid } from '@mui/material';
import { MoveDown } from '@mui/icons-material';
import './EndeavorPage.css';

function EndeavorPage() {
    const dispatch = useDispatch();
    const endeavor = useSelector(store => store.endeavor);

    useEffect(() => {
        dispatch({ type: 'FETCH_ENDEAVOR' });
    }, [dispatch]);


    return (
        <>
        <Icons />
        <Card sx={{
            borderRadius: 16,
            boxShadow: 2,
            elevation: 5,
            color: '#FFD30B',
            background: '#46629A',
            maxWidth: 370,
            marginTop: -5,
            marginBottom: 3,
            marginLeft: 4,
            marginRight: 4,
            paddingLeft: 2,
            paddingTop: 2,
            paddingBottom: 2,
            lineHeight: 1,
            textAlign: 'left',
            fontFamily: 'Rugrats Sans'
        }}> Click on 'Details' to see details about a project. </Card>
        <Grid sx={{ 
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(3, 1fr)',
            padding: 1
            }}>
            {endeavor?.map(endeavor => (
                <EndeavorItem key={endeavor.id} endeavor={endeavor} />
            ))}
        </Grid>
        </>
    );
}

export default EndeavorPage;
