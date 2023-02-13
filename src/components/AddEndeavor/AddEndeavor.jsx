import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddEndeavor() {

  const [titleInput, setTitleInput] = useState('');
  const [budgetInput, setBudgetInput] = useState('');
  const [materialsInput, setMaterialsInput] = useState('');
  const [inspirationInput, setInspirationInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [end_goalInput, setEnd_goalInput] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    console.log('dispatch');
    event.preventDefault();
    dispatch({
      type: 'ADD_ENDEAVOR',
      payload: titleInput,
              budgetInput,
              materialsInput,
              inspirationInput,
              descriptionInput,
              end_goalInput
              
    })
}

  return (
    <div className="container">
      <div>
        <p>Create a new endeavor</p>
      </div>
        <form onSubmit={handleSubmit}>
        <input onChange={(event) => setTitleInput(event.target.value)} 
        placeholder="Title" 
        value={titleInput}
        />
        <input onChange={(event) => setBudgetInput(event.target.value)} 
        placeholder="Budget" 
        value={budgetInput}
        />
        <input onChange={(event) => setMaterialsInput(event.target.value)} 
        placeholder="Materials" 
        value={materialsInput}
        />
        <input onChange={(event) => setInspirationInput(event.target.value)} 
        placeholder="Inspiration" 
        value={inspirationInput}
        />
        <input onChange={(event) => setDescriptionInput(event.target.value)} 
        placeholder="Description" 
        value={descriptionInput}
        />
        <input onChange={(event) => setEnd_goalInput(event.target.value)} 
        placeholder="End Goal" 
        value={end_goalInput}
        />


<button>Create</button>
</form>
    </div>
  );
}

export default AddEndeavor;


