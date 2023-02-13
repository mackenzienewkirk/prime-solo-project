import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from '@mui/material';
import { Input } from '@mui/material';
import { useHistory } from 'react-router-dom';

function AddEndeavor() {

  const [titleInput, setTitleInput] = useState('');
  const [budgetInput, setBudgetInput] = useState('');
  const [materialsInput, setMaterialsInput] = useState('');
  const [inspirationInput, setInspirationInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [end_goalInput, setEnd_goalInput] = useState('');
  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log('dispatch');
    event.preventDefault();
    dispatch({
      type: 'ADD_ENDEAVOR',
      payload: {titleInput,
              budgetInput,
              materialsInput,
              inspirationInput,
              descriptionInput,
              end_goalInput}
              
    })
    setTitleInput('');
    setBudgetInput('');
    setMaterialsInput('');
    setInspirationInput('');
    setDescriptionInput('');
    setEnd_goalInput('');

    history.push(`/endeavor`);
}

  return (
    
    <Card sx={{
      maxWidth: 345,
            color: '#2b4743',
            background: '#FAFAFA',
            border: 10,
            borderColor:'#FFD353',
            borderWidth: 3,
            fontFamily: 'Alegreya',
            maxWidth: 700,
            marginTop: 6,
            marginBottom: 6,
            marginLeft: 8,
            marginRight: 8,
            padding: 2,
            lineHeight: 2,
    }}>
    <div className="container">
      <div>
        <p>Create a new endeavor</p>
      </div>
        <form onSubmit={handleSubmit}>
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#2b4743',
          padding: .5,
          marginTop: 1,
          marginBottom: 1,
          borderRadius: 2,
        }}onChange={(event) => setTitleInput(event.target.value)} 
        placeholder="Title" 
        value={titleInput}
        />
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#2b4743',
          padding: .5,
          marginTop: 1,
          marginBottom: 1,
          borderRadius: 2,
        }}onChange={(event) => setBudgetInput(event.target.value)} 
        placeholder="Budget" 
        value={budgetInput}
        />
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#2b4743',
          padding: .5,
          marginTop: 1,
          marginBottom: 1,
          borderRadius: 2,
        }}onChange={(event) => setMaterialsInput(event.target.value)} 
        placeholder="Materials" 
        value={materialsInput}
        />
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#2b4743',
          padding: .5,
          marginTop: 1,
          marginBottom: 1,
          borderRadius: 2,
        }}onChange={(event) => setInspirationInput(event.target.value)} 
        placeholder="Inspiration" 
        value={inspirationInput}
        />
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#2b4743',
          padding: .5,
          marginTop: 1,
          marginBottom: 1,
          borderRadius: 2,
        }}onChange={(event) => setDescriptionInput(event.target.value)} 
        placeholder="Description" 
        value={descriptionInput}
        />
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#2b4743',
          padding: .5,
          marginTop: 1,
          marginBottom: 1,
          borderRadius: 2,
        }}onChange={(event) => setEnd_goalInput(event.target.value)} 
        placeholder="End Goal" 
        value={end_goalInput}
        />


<button onClick={handleSubmit}>Create</button>
</form>
    </div>
    </Card>
  );
}

export default AddEndeavor;


