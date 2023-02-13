import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import './EndeavorDetails.css';
import { textAlign } from '@mui/system';


function EndeavorDetails(endeavor) {

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
            background: '#FAFAFA',
            border: 10,
            borderColor:'#FFD353',
            borderWidth: 3,
            maxWidth: 700,
            marginTop: 6,
            marginBottom: 6,
            marginLeft: 8,
            marginRight: 8,
            padding: 2,
            lineHeight: 2,

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
    <Button sx={{
        color: '#336699'
    }} onClick={() => editEndeavor(endeavor.id)}>Edit</Button>
    <Button sx={{
        color: '#336699'
    }} onClick={() => completeEndeavor(endeavor.id)}>Complete</Button>
            </Card>
        </>
    )
}

export default EndeavorDetails;