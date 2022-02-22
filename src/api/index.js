import axios from 'axios'

const url = 'http://localhost:5000/courses'

export const fetchCourses = () => axios.get(url)
export const fetchCourse = (id) => axios.get(`${url}/${id}`)