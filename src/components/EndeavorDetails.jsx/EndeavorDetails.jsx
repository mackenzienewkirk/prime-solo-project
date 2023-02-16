import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import './EndeavorDetails.css';


function EndeavorDetails(endeavor) {

    const params = useParams();

    console.log('params:', params);

    const dispatch = useDispatch();
    const history = useHistory();
    const endeavor_details = useSelector(store => store.endeavor_details)
    // const notes = useSelector(store => store.notes)

    useEffect(() => {
        dispatch({
            type: 'FETCH_ENDEAVOR_DETAILS',
            payload: params.id 
        })
    }, [params.id])

    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_NOTES_DETAILS',
    //         payload: params.id 
    //     })
    // }, [params.id])

    // const addNote = () => {
    //     history.push(`/addNote`);
    // }

    const editEndeavor = () => {
        console.log('endeavor_details for edit search',endeavor_details);
        history.push(`/endeavor/edit/${endeavor_details.id}`);
    }

    const completeEndeavor = () => {
        history.push(`/user`)
    }

    const backToEndeavors = () => {
        history.push(`/endeavor`)
    }

    return (
        <>
        <h1>
        <Card sx={{
            elevation: 5,
            color: '#FFD30B',
            background: '#46629A',
            maxWidth: 800,
            marginTop: 6,
            marginBottom: 6,
            marginLeft: 8,
            marginRight: 8,
            padding: 2,
            lineHeight: 1,
            textAlign: 'left',
            borderRadius: 6
        }}> Current Endeavor </Card>
        </h1>
        <Card sx={{
            elevation: 5,
            backgroundColor: '#ffccff',
            color: '#46629A',
            maxWidth: 800,
            marginTop: 6,
            marginBottom: 6,
            marginLeft: 8,
            marginRight: 8,
            padding: 3,
            lineHeight: 1,
            textAlign: 'left',
            borderRadius: 6

        }}
        >
            <Card sx={{
                textAlign: 'left',
                fontSize: 25,
                backgroundColor: '#CCFF00',
                color: '#46629A',
                lineHeight: 1,
                fontFamily: 'Rugrats Sans',
                padding: 1.5,
                lineHeight: 1,
                textAlign: 'left',
                borderRadius: 4
            }}>{endeavor_details.title}</Card >
            <br></br>
            <Card sx={{
                textAlign: 'left',
                fontSize: 22,
                backgroundColor: '#FFFFFF',
                color: '#46629A',
                lineHeight: 1,
                fontFamily: 'Rugrats Sans',
                padding: 1.5,
                lineHeight: 1,
                textAlign: 'left',
                borderRadius: 4,
                marginBottom: 2
            }}>
            
                <p>Budget: {endeavor_details.budget}</p>
                <p>Materials: {endeavor_details.materials}</p>
                <p>Inspiration: {endeavor_details.inspiration}</p>
                <p>Description: {endeavor_details.description}</p>
                <p>End Goal: {endeavor_details.end_goal}</p>
                </Card>
                {/* <li>{endeavor_details.is_done}</li> */}
            {/* <Button sx={{
        color: '#336699',
        textAlign: 'center'
    }} onClick={() => addNote(endeavor.id)}>Add A Note</Button> */}
    <Button sx={{
        color: '#336699',
        padding: 1,
        backgroundColor: '#CCFF00',
        marginRight: 1
    }} onClick={() => editEndeavor(endeavor.id)}>Edit</Button>
    <Button sx={{
        color: '#336699',
        padding: 1,
        backgroundColor: '#CCFF00'
    }} onClick={() => completeEndeavor(endeavor.id)}>Complete</Button>
    <Button sx={{
        color: '#336699',
        padding: 1,
        backgroundColor: '#CCFF00',
        marginLeft: 65
    }} onClick={() => backToEndeavors(endeavor.id)}>Back</Button>
            </Card>
        </>
    )
}

export default EndeavorDetails;