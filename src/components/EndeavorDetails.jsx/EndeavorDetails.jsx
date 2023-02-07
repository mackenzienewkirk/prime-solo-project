import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function EndeavorDetails() {
    const params = useParams();
    console.log('params:', params);
    const dispatch = useDispatch();
    const endeavorDetails = useSelector((store) => store.endeavorDetails)

    useEffect(() => {
        dispatch({
            type: 'FETCH_ENDEAVOR_DETAILS',
            payload: params.id 
        })
    }, [params.id])

    return (
        <>
            <h1>{endeavorDetails.title}</h1>
            <ul>
                <li>{endeavorDetails.budget}</li>
                <li>{endeavorDetails.materials}</li>
                <li>{endeavorDetails.inspiration}</li>
                <li>{endeavorDetails.description}</li>
                <li>{endeavorDetails.end_goal}</li>
                <li>{endeavorDetails.is_done}</li>
            </ul>
        </>
    )
}

export default EndeavorDetails;