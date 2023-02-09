import React from 'react';
import { useHistory } from 'react-router-dom';

function EndeavorItem({ endeavor }) {
    const history = useHistory();

    const showEndeavorDetails = () => {
        history.push(`/endeavor/${endeavor.id}`);
    }
    
    return (
        <button onClick={showEndeavorDetails}>
            {endeavor.title}
            <img src='images/corner_shelf.jpeg'></img>
        </button>
    )


}

export default EndeavorItem;