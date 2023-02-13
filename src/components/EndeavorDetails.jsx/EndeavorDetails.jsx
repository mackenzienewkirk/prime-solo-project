import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import './EndeavorDetails.css';
import { textAlign } from '@mui/system';


function EndeavorDetails() {

    const params = useParams();

    console.log('params:', params);

    const dispatch = useDispatch();
    const endeavor_details = useSelector(store => store.endeavor_details)

    useEffect(() => {
        dispatch({
            type: 'FETCH_ENDEAVOR_DETAILS',
            payload: params.id 
        })
    }, [params.id])

    return (
        <>
        <h1> Current Endeavor </h1>
        <Card sx={{
            elevation: 5,
            color: '#336699',
            background: '#FFF1FF',
            maxWidth: 700,
            margin: 10
        }}
        >
            <h2>{endeavor_details.title}</h2>
            <ul>
                <li>Budget: {endeavor_details.budget}</li>
                <li>Materials: {endeavor_details.materials}</li>
                <li>Inspiration: {endeavor_details.inspiration}</li>
                <li>Description: {endeavor_details.description}</li>
                <li>End Goal: {endeavor_details.end_goal}</li>
                {/* <li>{endeavor_details.is_done}</li> */}
            </ul>
            <Button sx={{
        color: '#336699',
        textAlign: 'center'
    }} onClick={() => addNote(endeavor.id)}>Add A Note</Button>
            </Card>
        </>
    )
}

export default EndeavorDetails;