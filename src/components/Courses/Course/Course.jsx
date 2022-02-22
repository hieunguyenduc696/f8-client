import React from 'react'
import { Typography, Card, CardContent, CardActions, CardMedia, Button } from '@material-ui/core'
import { useSelector} from 'react-redux'
import CustomizedAccordions from './Accordian'

import useStyles from './styles'
const Course = ({ id }) => {
  const classes = useStyles()
  const course = useSelector(state => state.courses)

  console.log(course)
  return (
      <>
        <div className={classes.toolbar} />
        {/* <CustomizedAccordions /> */}
      </>
  )
}

export default Course