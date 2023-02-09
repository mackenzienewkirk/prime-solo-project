import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEndeavors() {
    try {

        const response = yield axios.get('/api/endeavor');

        yield put({ type: 'SET_ENDEAVOR', payload: response.data });
    } catch (error) {
        console.log('could not find', error);
    }
}

function* fetchEndeavorDetails(action) {
    console.log(action.payload);
    const endeavorId = action.payload;
    try {
        const endeavorDetailsRes = yield axios({
        method: 'GET',
        url: `/api/endeavor/${endeavorId}`
    })
    yield put({
        type: 'SET_ENDEAVOR_DETAILS',
        payload: endeavorDetailsRes.data 
    })
    } catch (err) {
    console.log('fetchEndeavorDetails fail:', err);
    }
}

function* addEndeavor(action) {
    console.log(action.payload)
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/endeavor'
        })
        yield put({ 
            type: 'FETCH_ENDEAVOR',
            payload: response.data
    })
    } catch (err) {
        console.log(err);
    }
}

function* deleteEndeavor(action) {
    const endeavorToDelete = action.payload;
    console.log('id we are deleting:', endeavorToDelete)
    const response = yield axios({
        method: 'DELETE',
        url: `/api/endeavor/${endeavorToDelete}`
    })
    yield put({
        type: 'FETCH_ITEM',
        payload: response.data
    })
}

function* endeavorSaga() {
    yield takeLatest('FETCH_ENDEAVOR', fetchEndeavors);
    yield takeLatest('FETCH_ENDEAVOR_DETAILS', fetchEndeavorDetails);
    yield takeLatest('ADD_ENDEAVOR', addEndeavor);
    yield takeLatest('DELETE_ENDEAVOR', deleteEndeavor);
}

export default endeavorSaga; 