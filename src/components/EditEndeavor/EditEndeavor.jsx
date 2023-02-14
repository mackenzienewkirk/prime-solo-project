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
            marginTop: 6,
            marginBottom: 6,
            marginLeft: 4,
            marginRight: 4,
            padding: 2,
            lineHeight: 2,
    }}>
        <div>
            <h2> Edit Endeavor: {endeavorToEdit.title} </h2>
        <form>
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
        
        <button onClick={handleSubmit}>Submit</button>
    </form>
    </div>
    </Card>
    )
}

export default EditEndeavor;