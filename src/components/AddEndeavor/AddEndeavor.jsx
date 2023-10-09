import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from '@mui/material';
import { Grid } from '@mui/material';
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { ContactsOutlined } from '@mui/icons-material';

function AddEndeavor() {

  const [titleInput, setTitleInput] = useState('');
  const [budgetInput, setBudgetInput] = useState('');
  const [materialsInput, setMaterialsInput] = useState('');
  const [inspirationInput, setInspirationInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [end_goalInput, setEnd_goalInput] = useState('');
  const [notesInput, setNotesInput] = useState('');
  
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
              end_goalInput,
              notesInput}
              
    })
    setTitleInput('');
    setBudgetInput('');
    setMaterialsInput('');
    setInspirationInput('');
    setDescriptionInput('');
    setEnd_goalInput('');
    setNotesInput('');

    history.push(`/endeavor`);
}

const prefillForm = () => {
  setTitleInput('Build a Bird Bath');
  setBudgetInput('30');
  setMaterialsInput('Concrete, Bowl, Bird Bath Stand, Paint, Water');
  setInspirationInput('Birdfeeder Goal')
  setDescriptionInput('I want to build a matching bird bath for the current bird bath project! It will look like a retro swimming pool.');
  setEnd_goalInput('7/5/23');
  setNotesInput('I want it to look like an infinity pool');
}

const prefillFormJosee = () => {
  setTitleInput('Crochet a Cat Hat');
  setBudgetInput('10');
  setMaterialsInput('Yarn, Crochet Needles, Pattern, Cat');
  setInspirationInput('An Old Calendar')
  setDescriptionInput('I want to do a tea part photo shoot with my cats, and it would be much cuter if they had little hats that looked like flowers.');
  setEnd_goalInput('5/30/23');
  setNotesInput('They will be pink and green and yellow.');
}

  return (
    
    <Card sx={{
            color: '#2b4743',
            background: '#FAFAFA',
            border: 10,
            borderColor:'#FFD353',
            borderWidth: 3,
            fontFamily: 'Alegreya',
            width: 840,
            marginTop: 4,
            marginBottom: 6,
            marginLeft: 4,
            marginRight: 4,
            padding: 1,
            lineHeight: 2,
    }}>
    <div className="container">
      <div>
        
      </div>
      <Card sx={{
                  padding: 2,
                  gap: 3,
                  width: 700
      }}>
        <Card sx={{
              width: 200,
              padding: 1,
              color: '#FFD30B',
              background: '#46629A',
              textAlign: 'center',
              fontSize: 20,
              marginBottom: 1,
              marginLeft: 23,
              marginTop: 4

            }} onClick={prefillForm}>Create a new endeavor </Card>
            <img src='images/embroidery.jpg' className='embroidery2' onClick={prefillFormJosee}></img>
            
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#37004D',
          padding: .5,
          marginTop: 1,
          marginBottom: 2,
          marginRight: 4,
          marginLeft: 2,
          width: 500,
          borderRadius: 2,
        }}onChange={(event) => setTitleInput(event.target.value)} 
        placeholder="Title" 
        value={titleInput}
        />
        {/* <button onClick={prefillFormJosee}></button> */}
        
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#37004D',
          padding: .5,
          marginTop: 1,
          marginBottom: 2,
          marginLeft: 2,
          marginRight: .8, 
          width: 230, 
          borderRadius: 2,
        }}onChange={(event) => setBudgetInput(event.target.value)} 
        placeholder="Budget" 
        value={budgetInput}
        />
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#37004D',
          padding: .5,
          marginTop: 1,
          marginBottom: 1,
          marginLeft: 2,
          width: 245,
          borderRadius: 2,
        }}onChange={(event) => setEnd_goalInput(event.target.value)} 
        placeholder="End Goal" 
        value={end_goalInput}
        />
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#37004D',
          padding: .5,
          marginTop: 1,
          marginRight: 2,
          marginBottom: 2,
          marginLeft: 2,
          width: 500,
          borderRadius: 2,
        }}onChange={(event) => setMaterialsInput(event.target.value)} 
        placeholder="Materials" 
        value={materialsInput}
        />
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#37004D',
          padding: .5,
          marginTop: 1,
          marginBottom: 2,
          marginLeft: 2,
          width: 500,
          borderRadius: 2,
        }}onChange={(event) => setInspirationInput(event.target.value)} 
        placeholder="Inspiration" 
        value={inspirationInput}
        />
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#37004D',
          padding: .5,
          marginTop: 1,
          marginBottom: 2,
          marginRight: 2,
          marginLeft: 2,
          width: 500,
          borderRadius: 2,
        }}onChange={(event) => setDescriptionInput(event.target.value)} 
        placeholder="Description" 
        value={descriptionInput}
        />
        <Input sx={{
          backgroundColor: '#ffd3db',
          color: '#37004D',
          padding: .5,
          marginTop: 1,
          marginBottom: 2,
          marginRight: 2,
          marginLeft: 2,
          width: 500,
          borderRadius: 2,
        }}onChange={(event) => setNotesInput(event.target.value)} 
        placeholder="Notes" 
        value={notesInput}
        />
        
<br></br>

<Button sx={{
        marginLeft: 2,
        marginBottom: 2,
        backgroundColor: '#CCFF00',
        color: '#46629A',
        padding: 2
        
}} onClick={handleSubmit}>Create Now! </Button>
</Card>

    </div>
    </Card>
  );
}

export default AddEndeavor;


