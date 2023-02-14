import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@mui/material';
import { Card } from '@mui/material';

function EditEndeavor() {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const endeavorToEdit = useSelector((store) => store.edit_endeavor);
    

    useEffect(() => {
        console.log('params.id', params.id)

        dispatch({
            type: 'FETCH_ENDEAVOR_TO_EDIT',
            payload: params.id
        })
        
    }, [])

    const handleInputChange = (evt) => {
        console.log(endeavorToEdit);
        dispatch({
            type: 'SET_ENDEAVOR_TO_EDIT',
        })
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'UPDATE_ENDEAVOR',
            payload: endeavorToEdit
        })
        history.push('/endeavor');
    }
    return(
        <Card sx={{
            color: '#2b4743',
            background: '#FAFAFA',
            border: 10,
            borderColor:'#FFD353',
            borderWidth: 3,
            fontFamily: 'Alegreya',
            maxWidth: 1000,
            marginTop: 2,
            marginBottom: 2,
            marginLeft: 4,
            marginRight: 4,
            paddingLeft: 2,
            lineHeight: 2,
    }}>
        <div>
            <h2> Edit Endeavor: {endeavorToEdit.title} </h2>
        <form>
            <div>Title:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            borderRadius: 2,
        }}
            title="Title"
            type="text"
            value={endeavorToEdit.title || ''}
            onChange={handleInputChange}
        /> 
        <div>Budget:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            borderRadius: 2,
        }}
            type="text"
            value={endeavorToEdit.budget || ''}
            onChange={handleInputChange}
        /> 
        <div>Materials:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            borderRadius: 2,
        }}
            type="text"
            value={endeavorToEdit.materials || ''}
            onChange={handleInputChange}
        /> 
        <div>Inspiration:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            borderRadius: 2,
        }}
            type="text"
            value={endeavorToEdit.inspiration || ''}
            onChange={handleInputChange}
        /> 
        <div>Description:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            borderRadius: 2,
        }}
            type="text"
            value={endeavorToEdit.description || ''}
            onChange={handleInputChange}
        /> 
        <div>End Goal:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            borderRadius: 2,
        }}
            type="text"
            value={endeavorToEdit.end_goal || ''}
            onChange={handleInputChange}
        /> 
        <div>
        <button onClick={handleSubmit}>Submit</button>
        </div>
    </form>
    </div>
    </Card>
    )
}

export default EditEndeavor;