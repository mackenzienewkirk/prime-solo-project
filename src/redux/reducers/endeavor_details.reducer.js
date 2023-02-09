const endeavorDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ENDEAVOR_DETAILS':
            return action.payload
        default:
            return state
    }
}

export default endeavorDetails;