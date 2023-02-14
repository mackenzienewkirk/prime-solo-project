import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditEndeavor() {

    const params = useParams();
    const dispatch = useDispatch();
    const endeavorToEdit = useSelector((store) => store.endeavorToEdit);
    const history = useHistory();

    useEffect(() => {
        console.log('params.id', params.id)

        dispatch({
            type: 'FETCH_ENDEAVOR_TO_EDIT',
            payload: params.id
        })
        
    }, [])

    const handleInputChange = (evt) => {
        dispatch({
            type: 'SET_GITHUB_NAME',
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
        <div>
            <h2> Edit Endeavor </h2>

            <form>
        <input 
            type="text"
            // value={endeavorToEdit. || ''}
            onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Submit</button>
    </form>
    </div>
    )
}

export default EditEndeavor;