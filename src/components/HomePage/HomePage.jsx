import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getCourses } from '../../actions/courses'

import HomeCarousel from './Carousel'
import Itinerary from './Itinerary'
import Courses from '../Courses/Courses'

const HomePage = ({ setIsOpen }) => {
  const [cate, setCate] = useState('fe')
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCourses())
  }, [dispatch])

  useEffect(() => {
      setIsOpen(true);
  }, [setIsOpen])  

  return (
      <>
        <HomeCarousel />
        <Itinerary setCate={setCate} />
        <Courses cate={cate} />
      </>
  )
}

export default HomePage