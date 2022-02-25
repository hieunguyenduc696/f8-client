const courses = (state = { isLoading: true, courses: [] }, action) => {
    switch (action.type) {
        case 'FETCH_COURSE':
            return { ...state, course: action.payload }
        case 'FETCH_COURSES':
            return { ...state, courses: action.payload }
        case 'REGISTER':
        case 'SEEN':
            return { ...state, courses: state.courses.courses.map(course => course.id === action.payload.id ? action.payload : course)}
        default:
            return state
    }
}

export default courses;