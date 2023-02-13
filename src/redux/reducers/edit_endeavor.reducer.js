const endeavorToEdit = (state = {}, action) => {
    if (action.type === 'SET_ENDEAVOR_TO_EDIT') {
        return action.payload; 
    } else if (action.type === 'SET_ENDEAVOR') {
    
    const newEndeavorValue = action.payload;

    return {...state, endeavor: newEndeavorValue}
    }
    return state;
}

export default endeavorToEdit;