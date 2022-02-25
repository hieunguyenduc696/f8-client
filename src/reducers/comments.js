const commentReducer = (state = [], action) => {
    switch (action.type) {
        case 'COMMENT':
            return [ action.payload, ...state ]
        case 'GET_COMMENT':
            return action.payload
        default:
            return state
    }
}

export default commentReducer