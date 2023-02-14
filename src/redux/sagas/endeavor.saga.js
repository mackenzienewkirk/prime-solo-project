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

// function* fetchNotes() {
//     try {

//         const response = yield axios.get('/api/notes');

//         yield put({ type: 'SET_NOTES', payload: response.data });
//     } catch (error) {
//         console.log('could not find', error);
//     }
// }

// function* fetchNotesDetails(action) {
//     console.log(action.payload);
//     const notesId = action.payload;
//     try {
//         const notesDetailsRes = yield axios({
//         method: 'GET',
//         url: `/api/notes/${notesId}`
//     })
//     yield put({
//         type: 'SET_NOTES_DETAILS',
//         payload: notesDetailsRes.data 
//     })
//     } catch (err) {
//     console.log('fetchNotesDetails fail:', err);
//     }
// }

function* addEndeavor(action) {
    console.log(action.payload);
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/endeavor',
            data: action.payload
        })
        yield put({ 
            type: 'FETCH_ENDEAVOR',
            payload: response.data
    })
    } catch (err) {
        console.log(err);
    }
}

function* addNote(action) {
    console.log(action.payload);
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/notes',
            data: action.payload
        })
        yield put({ 
            type: 'FETCH_NOTES',
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

function* fetchEndeavorToEdit(action) {
    console.log('action.payload', action.payload);
    const idOfEndeavorToEdit = action.payload;
    
    const response = yield axios({
        method: 'GET',
        url: `/api/endeavor/${idOfEndeavorToEdit}`
    })
    console.log(response.data);
    yield put({
        type: 'SET_ENDEAVOR_TO_EDIT',
        payload: response.data
    })
}

function* updateEndeavor(action) {
    const editedEndeavor = action.payload;
    yield axios({
        method: 'PUT',
        url: `/api/endeavor/${editedEndeavor.id}`,
        data: editedEndeavor
    })

    yield put({
        type: 'FETCH_ENDEAVOR'
    })

}

function* endeavorSaga() {
    yield takeLatest('FETCH_ENDEAVOR', fetchEndeavors);
    yield takeLatest('FETCH_ENDEAVOR_DETAILS', fetchEndeavorDetails);
    // yield takeLatest('FETCH_NOTES', fetchNotes);
    // yield takeLatest('FETCH_NOTES_DETAILS', fetchNotesDetails);
    yield takeLatest('ADD_ENDEAVOR', addEndeavor);
    yield takeLatest('DELETE_ENDEAVOR', deleteEndeavor);
    yield takeLatest('FETCH_ENDEAVOR_TO_EDIT', fetchEndeavorToEdit)
    yield takeLatest('UPDATE_ENDEAVOR', updateEndeavor);
    yield takeLatest('ADD_NOTE', addNote);
}

export default endeavorSaga; 