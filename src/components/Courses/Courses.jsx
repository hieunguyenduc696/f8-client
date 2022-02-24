import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector} from 'react-redux'

import Course from './Course/Course'

const Courses = () => {
  const { courses } = useSelector(state => state.courses.courses)
  if (!courses || courses.length === 0) {
    return <CircularProgress />
  }
  return (
      <>
        {courses && <Grid container spacing={3}>
            {courses?.map((course => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                    <Course course={course} />
                </Grid>
            )))}
        </Grid>}
      </>
  )
}

export default Courses