const courses = (state = { isLoading: true, courses: [] }, action) => {
    switch (action.type) {
        case 'FETCH_COURSE':
            return { ...state, course: action.payload }
        case 'FETCH_COURSES':
            return { ...state, courses: action.payload }
        default:
            return state
    }
}

export default courses;