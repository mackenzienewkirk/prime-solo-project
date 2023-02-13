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
}

export default EditEndeavor;