import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Endeavor() {
    const params = useParams();
    console.log('params:', params);
    const dispatch = useDispatch();
    const endeavor = useSelector((store) => store.endeavor)

    useEffect(() => {
        dispatch({
            type: 'FETCH_ENDEAVOR',
            payload: params.id 
        })
    }, [params.id])

    return (
        <>
            <h1>{endeavor.title}</h1>
            <ul>
                <li>{endeavor.budget}</li>
                <li>{endeavor.materials}</li>
                <li>{endeavor.inspiration}</li>
                <li>{endeavor.description}</li>
                <li>{endeavor.end_goal}</li>
                <li>{endeavor.is_done}</li>
            </ul>
        </>
    )
}

export default Endeavor;