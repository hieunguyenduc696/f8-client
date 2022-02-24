import * as api from '../api'

export const getCourses = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCourses()
        dispatch({ type: 'FETCH_COURSES', payload: data });
    } catch (error) {
        console.error(error)
    }
}

export const getCourse = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchCourse(id)
        dispatch({ type: 'FETCH_COURSE', payload: data });
    } catch (error) {
        console.error(error)
    }
}

export const registerCourse = (id) => async (dispatch) => {
    try {
        const { data } = await api.registerCourse(id)
        dispatch({ type: 'REGISTER', payload: data });
    } catch (error) {
        console.log(error)
    }
}