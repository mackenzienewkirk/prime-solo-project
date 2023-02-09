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
    try {
        yield axios({
            method: 'POST',
            url: '/endeavor'
        })
        yield put({ type: 'FETCH_ENDEAVOR'})
    } catch (err) {
        console.log(err);
    }
}

function* endeavorSaga() {
    yield takeLatest('FETCH_ENDEAVOR', fetchEndeavors);
    yield takeLatest('FETCH_ENDEAVOR_DETAILS', fetchEndeavorDetails);
    yield takeLatest('ADD_ENDEAVOR', addEndeavor);
}

export default endeavorSaga; 