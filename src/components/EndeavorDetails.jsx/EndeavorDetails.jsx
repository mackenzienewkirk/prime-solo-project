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

    const addNote = (id) => {
        history.push(`/note/${endeavor.id}`);
    }

    const editEndeavor = () => {
        history.push(`/edit/${endeavor.id}`);
    }

    

    return (
        <>
        <h1>
        <Card sx={{
            elevation: 5,
            color: '#2b4743',
            background: '#ffd3db',
            border: 10,
            borderColor:'#8c3839',
            borderWidth: 3,
            maxWidth: 700,
            marginTop: 6,
            marginBottom: 6,
            marginLeft: 20,
            marginRight: 20,
            padding: 2,
            lineHeight: 1,
            textAlign: 'center'
        }}> Current Endeavor </Card>
        </h1>
        <Card sx={{
            elevation: 5,
            color: '#2b4743',
            background: '#cedeeb',
            border: 10,
            borderColor:'#8c3839',
            borderWidth: 3,
            maxWidth: 700,
            marginTop: 6,
            marginBottom: 6,
            marginLeft: 8,
            marginRight: 8,
            padding: 2,
            lineHeight: 1,
            textAlign: 'center'

        }}
        >
            <h2>{endeavor_details.title}</h2>
            
                <p>Budget: {endeavor_details.budget}</p>
                <p>Materials: {endeavor_details.materials}</p>
                <p>Inspiration: {endeavor_details.inspiration}</p>
                <p>Description: {endeavor_details.description}</p>
                <p>End Goal: {endeavor_details.end_goal}</p>
                {/* <li>{endeavor_details.is_done}</li> */}
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