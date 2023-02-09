import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function EndeavorDetails() {
    const params = useParams();
    console.log('params:', params);
    const dispatch = useDispatch();
    const endeavor_details = useSelector((store) => store.endeavor_details)

    useEffect(() => {
        dispatch({
            type: 'FETCH_ENDEAVOR_DETAILS',
            payload: params.id 
        })
    }, [params.id])

    return (
        <>
            <h1>{endeavor_details.title}</h1>
            <ul>
                <li>{endeavor_details.budget}</li>
                <li>{endeavor_details.materials}</li>
                <li>{endeavor_details.inspiration}</li>
                <li>{endeavor_details.description}</li>
                <li>{endeavor_details.end_goal}</li>
                <li>{endeavor_details.is_done}</li>
            </ul>
        </>
    )
}

export default EndeavorDetails;