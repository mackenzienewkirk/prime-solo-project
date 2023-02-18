const endeavorDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ENDEAVOR_DETAILS':
            return action.payload
        default:
            return state
    }
}

export default endeavorDetails;

//ENDEAVOR/CLEAR_CURRENT: {}; - to clear the previously rendered info for faster update 

