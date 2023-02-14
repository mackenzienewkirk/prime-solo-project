import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card } from '@mui/material';
import { useState } from 'react';
import { Input } from '@mui/material';
import { green } from '@mui/material/colors';

function addNote() {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useState();


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
            paddingTop: 2,
            lineHeight: 3,
        }}>
            <h1> Add a note! </h1>
            <Input sx={{paddingRight: 2,
                        marginRight: 3,
            }}onChange={(event) => setTitleInput(event.target.value)} 
        placeholder="Title" 
        value={titleInput}
        />

            <Input sx={{paddingRight: 2,
                        marginRight: 4,
            }}onChange={(event) => setDescriptionInput(event.target.value)} 
        placeholder="Description" 
        value={descriptionInput}
        />
            <button sx={{color: '#dda83f'
            }} onClick={handleSubmit}>Submit</button>
        </Card>
    )
}

export default addNote;