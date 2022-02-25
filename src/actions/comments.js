import * as api from '../api'

export const comment = (id, i, j, content, name, image) => async (dispatch) => {
    try {
        const { data } = await api.commentCourse(id, i, j, content, name, image)
        dispatch({ type: 'COMMENT', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getComment = (id, i, j) => async (dispatch) => {
    try {
        const { data } = await api.getCommentCourse(id, i, j)
        dispatch({ type: 'GET_COMMENT', payload: data })
    } catch (error) {
        console.log(error)
    }
}