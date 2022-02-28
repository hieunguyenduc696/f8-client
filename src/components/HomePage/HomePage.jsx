import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getCourses } from '../../actions/courses'

import HomeCarousel from './Carousel'
import Itinerary from './Itinerary'
import Courses from '../Courses/Courses'

import useStyles from './styles'

const HomePage = ({ setIsOpen }) => {
  const classes = useStyles()
  const [cate, setCate] = useState('fe')
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCourses())
  }, [dispatch])

  useEffect(() => {
      setIsOpen(true);
  }, [setIsOpen])  

  return (
      <div className={classes.homepage}>
        <div className={classes.toolbar} />
        <HomeCarousel />
        <Itinerary setCate={setCate} />
        <Courses cate={cate} />
      </div>
  )
}

export default HomePage