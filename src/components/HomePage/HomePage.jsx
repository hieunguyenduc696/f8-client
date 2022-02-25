import React, { useState, useEffect } from 'react'

import HomeCarousel from './Carousel'
import Itinerary from './Itinerary'
import Courses from '../Courses/Courses'

const HomePage = ({ setIsOpen }) => {
  const [cate, setCate] = useState('fe')

  useEffect(() => {
      setIsOpen(true);
  }, [])  

  return (
      <>
        <HomeCarousel />
        <Itinerary setCate={setCate} />
        <Courses cate={cate} />
      </>
  )
}

export default HomePage