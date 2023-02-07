import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EndeavorItem from './EndeavorItem';

function EndeavorPage() {
    const dispatch = useDispatch();
    const endeavors = useSelector(store => store.endeavors);

    useEffect(() => {
        dispatch({ type: 'FETCH_ENDEAVOR' });
    }, [dispatch]);

    return (
        <>
        <h1> Endeavors Page </h1>
        <h4> Look through all of your current projects! </h4>
        <ul>
            {endeavors?.map(endeavor => (
                <EndeavorItem key={endeavor.id} endeavor={endeavor} />
            ))}
        </ul>
        </>
    );
}

export default EndeavorPage;
