const notesDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NOTES_DETAILS':
            return action.payload
        default:
            return state
    }
}

export default notesDetails;