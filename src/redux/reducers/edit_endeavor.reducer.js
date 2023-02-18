const endeavorToEdit = (state = {}, action) => {
    if (action.type === 'SET_ENDEAVOR_TO_EDIT') {
        return action.payload; 
    } 
    else if (action.type === 'SET_TITLE') {

        return {...state, title: action.payload}
    } 
    else if (action.type === 'SET_BUDGET') {

        return {...state, budget: action.payload}
    } 
    else if (action.type === 'SET_MATERIALS') {

        return {...state, materials: action.payload}
    }
    else if (action.type === 'SET_INSPIRATION') {

        return {...state, inspiration: action.payload}
    }
    else if (action.type === 'SET_DESCRIPTION') {

        return {...state, description: action.payload}
    }
    else if (action.type === 'SET_END_GOAL') {

        return {...state, end_goal: action.payload}
    }
    else if (action.type === 'SET_NOTES') {

        return {...state, notes: action.payload}
    }
    return state;
}

export default endeavorToEdit;