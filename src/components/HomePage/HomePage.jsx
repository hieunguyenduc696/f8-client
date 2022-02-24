import React, { useState } from 'react'

import HomeCarousel from './Carousel'
import Itinerary from './Itinerary'
import Courses from '../Courses/Courses'

const HomePage = () => {
  const [cate, setCate] = useState('fe')

  return (
      <>
        <HomeCarousel />
        <Itinerary setCate={setCate} />
        <Courses cate={cate} />
      </>
  )
}

export default HomePage