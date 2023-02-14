import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditEndeavor() {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const endeavorToEdit = useSelector((store) => store.endeavorToEdit);
    

    useEffect(() => {
        console.log('params.id', params.id)

        dispatch({
            type: 'FETCH_ENDEAVOR_TO_EDIT',
        })
        
    }, [])

    const handleInputChange = (evt) => {
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
        <div>
            <h2> Edit Endeavor </h2>

            <form>
        <input 
            type="title"
            value={endeavorToEdit.title || ''}
            onChange={(event) => dispatch({type: 'EDIT_ENDEAVOR',payload: event.target.value})}
        />
        <input 
            type="text"
            value={endeavorToEdit.budget || ''}
            onChange={(event) => dispatch({type: 'EDIT_ENDEAVOR',payload: event.target.value})}
        />
        <input 
            type="text"
            value={endeavorToEdit.materials || ''}
            onChange={(event) => dispatch({type: 'EDIT_ENDEAVOR',payload: event.target.value})}
        />
        <input 
            type="text"
            value={endeavorToEdit.inspiration || ''}
            onChange={(event) => dispatch({type: 'EDIT_ENDEAVOR',payload: event.target.value})}
        />
        <input 
            type="text"
            value={endeavorToEdit.description || ''}
            onChange={(event) => dispatch({type: 'EDIT_ENDEAVOR',payload: event.target.value})}
        />
        <input 
            type="text"
            value={endeavorToEdit.end_goal || ''}
            onChange={(event) => dispatch({type: 'EDIT_ENDEAVOR',payload: event.target.value})}
        />
        
        <input 
            type="text"
            value={endeavorToEdit.budget || ''}
            onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Submit</button>
    </form>
    </div>
    )
}

export default EditEndeavor;