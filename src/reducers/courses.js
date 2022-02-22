const courses = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_COURSE':
            return action.payload;
        case 'FETCH_COURSES':
            return action.payload;
        default:
            return state
    }
}

export default courses;