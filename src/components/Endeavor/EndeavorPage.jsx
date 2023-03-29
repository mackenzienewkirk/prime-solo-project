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
        //Info cards to state what to do on the page//
        <>
        <Icons />
        <Card sx={{
            borderRadius: 4,
            boxShadow: 2,
            elevation: 1,
            backgroundColor: '#ffccff',
            color: '#410064',
            maxWidth: 420,
            marginTop: -4,
            marginBottom: 3,
            marginLeft: 4,
            marginRight: 6,
            marginBottom: 10,
            paddingLeft: 2,
            paddingTop: 2,
            paddingBottom: 2,
            paddingRight: 2,
            lineHeight: 1,
            textAlign: 'left',
            fontSize: 26,
            lineHeight: 1,
            fontFamily: 'Rugrats Sans'
        }}>Check out your current endeavors:</Card>

        <Card sx={{
            borderRadius: 4,
            boxShadow: 2,
            elevation: 1,
            color: '#FFD30B',
            background: '#46629A',
            maxWidth: 420,
            marginTop: -6,
            marginBottom: 5,
            marginLeft: 4,
            marginRight: 6,
            paddingLeft: 1.5,
            paddingTop: 1.5,
            paddingBottom: 1.5,
            paddingRight: 1.5,
            lineHeight: 1,
            textAlign: 'left',
            fontSize: 22,
            lineHeight: 1,
            fontFamily: 'Rugrats Sans'
        }}> Click on 'Details' to see details about a project.</Card>
        <Grid sx={{ 
            display: 'grid',
            gap: 3,
            gridTemplateColumns: 'repeat(3, 2fr)',
            padding: 1,
            elevation: 8
            }}>
            {endeavor?.map(endeavor => (
                <EndeavorItem key={endeavor.id} endeavor={endeavor} />
            ))}
        </Grid>
        </>
    );
}

export default EndeavorPage;
