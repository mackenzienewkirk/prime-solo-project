import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card } from '@mui/material';

function addNote() {
    const dispatch = useDispatch();
    const history = useHistory();


    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const handleSubmit = (event) => {
        console.log('dispatch');
        event.preventDefault();
        dispatch({
            type: 'ADD_NOTE',
            payload: {titleInput,
                    descriptionInput}
        })
    
        history.push(`/endeavor/:id`);
    }

    return (
        <Card >
            <h1> Add a note! </h1>
            <Input onChange={(event) => setTitleInput(event.target.value)} 
        placeholder="Title" 
        value={titleInput}
        />

            <Input onChange={(event) => setDescriptionInput(event.target.value)} 
        placeholder="Description" 
        value={descriptionInput}
        />
            <button onClick={handleSubmit}>Submit</button>
        </Card>
    )
}

export default addNote;