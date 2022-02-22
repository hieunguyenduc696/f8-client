import React from 'react'
import { Typography, Card, CardContent, CardActions, CardMedia, Button } from '@material-ui/core'

import CustomizedAccordions from './Accordian'

import useStyles from './styles'
const Course = () => {
  const classes = useStyles()  
  return (
      <>
        <div className={classes.toolbar} />
        {/* <CustomizedAccordions /> */}
      </>
  )
}

export default Course