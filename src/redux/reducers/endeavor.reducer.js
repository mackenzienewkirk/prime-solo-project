const endeavorReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ENDEAVOR':
            return action.payload;
        default: 
            return state;
    }
};


export default endeavorReducer;