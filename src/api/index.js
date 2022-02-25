import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchCourses = () => API.get('/courses')
export const fetchCourse = (id) => API.get(`/courses/${id}`)
export const registerCourse = (id) => API.patch(`/courses/${id}/registercourse`)
export const seenCourse = (id, i, j) => API.patch(`/courses/${id}/seencourse`, { i ,j })

export const signin = (formData) => API.post('/users/signin', formData)
export const signup = (formData) => API.post('/users/signup', formData)

