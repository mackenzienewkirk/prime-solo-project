import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEndeavors() {
    try {
        // const config = {
        //     headers: { 'Content-Type': 'application/json' },
        //     withCredentials: true,
        // };

        const response = yield axios.get('/api/endeavor');

        yield put({ type: 'SET_ENDEAVOR', payload: response.data });
    } catch (error) {
        console.log('could not find', error);
    }
}

function* endeavorSaga() {
    yield takeLatest('FETCH_ENDEAVOR', fetchEndeavors);
}

export default endeavorSaga; 