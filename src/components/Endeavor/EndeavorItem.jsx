import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function EndeavorItem() {
    const history = useHistory();

    const showEndeavorDetails = () => {
        dispatch({
            type: 'FETCH_ENDEAVOR_DETAILS',
            payload: endeavor.id
        })
        history.push(`/endeavor/${endeavor.id}`);
    }
    
    return (
        <button onClick={showEndeavorDetails} className="btn btn-light blockBtn">
        {endeavor.title}
        </button>
    )


}

export default EndeavorItem;