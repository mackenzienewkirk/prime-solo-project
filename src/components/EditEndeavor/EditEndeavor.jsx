import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@mui/material';
import { Card } from '@mui/material';
import { Button } from '@mui/material';

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

    const handleTitleChange = (evt) => {
        console.log(endeavorToEdit);
        dispatch({
            type: 'SET_TITLE',
            payload: evt.target.value
        })
    }

    const handleBudgetChange = (evt) => {
        console.log(endeavorToEdit);
        dispatch({
            type: 'SET_BUDGET',
            payload: evt.target.value
        })
    }

    const handleMaterialsChange = (evt) => {
        console.log(endeavorToEdit);
        dispatch({
            type: 'SET_MATERIALS',
            payload: evt.target.value
        })
    }

    const handleInspirationChange = (evt) => {
        console.log(endeavorToEdit);
        dispatch({
            type: 'SET_INSPIRATION',
            payload: evt.target.value
        })
    }

    const handleDescriptionChange = (evt) => {
        console.log(endeavorToEdit);
        dispatch({
            type: 'SET_DESCRIPTION',
            payload: evt.target.value
        })
    }

    const handleEndGoalChange = (evt) => {
        console.log(endeavorToEdit);
        dispatch({
            type: 'SET_END_GOAL',
            payload: evt.target.value
        })
    }

    const handleNotesChange = (evt) => {
        console.log(endeavorToEdit);
        dispatch({
            type: 'SET_NOTES',
            payload: evt.target.value
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
            fontFamily: 'Rugrats Sans',
            maxWidth: 900,
            marginTop: 2,
            marginBottom: 2,
            marginLeft: 4,
            marginRight: 4,
            paddingLeft: 2,
            lineHeight: 2,
    }}>
        <div>
            <Card sx={{
                width: 400,
                padding: 1,
                color: '#FFD30B',
                background: '#46629A',
                textAlign: 'center',
                fontSize: 20,
                marginBottom: 2,
                marginLeft: 2,
                marginTop: 2

            }}> Edit Endeavor: {endeavorToEdit.title} </Card>
        <form>
            <Card sx={{
                padding: 2,
                width: 700,
                marginBottom: 2
            }}>
            <div>Title:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            marginBottom: 2,
            borderRadius: 2,
            width: 400
        }}
            title="Title"
            type="text"
            value={endeavorToEdit.title || ''}
            onChange={handleTitleChange}
        /> 
        <div>Budget:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            marginBottom: 2,
            borderRadius: 2,
            width: 300
        }}
            type="text"
            value={endeavorToEdit.budget || ''}
            onChange={handleBudgetChange}
        /> 
        <div>End Goal:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            marginBottom: 2,
            borderRadius: 2,
            width: 300
        }}
            type="text"
            value={endeavorToEdit.end_goal || ''}
            onChange={handleEndGoalChange}
        /> 
        <div>Materials:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            marginBottom: 2,
            borderRadius: 2,
            width: 600
        }}
            type="text"
            value={endeavorToEdit.materials || ''}
            onChange={handleMaterialsChange}
        /> 
        <div>Inspiration:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            marginBottom: 2,
            borderRadius: 2,
            width: 600
        }}
            type="text"
            value={endeavorToEdit.inspiration || ''}
            onChange={handleInspirationChange}
        /> 
        <div>Description:</div>
            <Input sx={{
            backgroundColor: '#ffd3db',
            color: '#2b4743',
            padding: .5,
            marginTop: 1,
            marginBottom: 2,
            borderRadius: 2,
            width: 600
        }}
            type="text"
            value={endeavorToEdit.description || ''}
            onChange={handleDescriptionChange}
        /> 

        <div>Notes: </div>
                    <Input sx={{
                    backgroundColor: '#ffd3db',
                    color: '#2b4743',
                    padding: .5,
                    marginTop: 1,
                    marginBottom: 2,
                    borderRadius: 2,
                    width: 600
                }}
                    type="text"
                    value={endeavorToEdit.notes || ''}
                    onChange={handleNotesChange}
                /> 
        
        <br>

        </br>
        <div>
        <Button 
            sx={{
                marginLeft: 2,
                marginBottom: 2,
                marginTop: 2,
                backgroundColor: '#CCFF00',
                color: '#46629A',
                padding: 2
                
        }}
        onClick={handleSubmit}>Submit</Button>
        </div>
        </Card>
    </form>
    </div>
    </Card>
    )
}

export default EditEndeavor;