import React from 'react'

import HomeCarousel from './Carousel'
import Itinerary from './Itinerary'
import Courses from '../Courses/Courses'

import useStyles from './styles'

const HomePage = () => {
  const classes = useStyles()

  return (
      <>
        <HomeCarousel />
        <Itinerary />
        <Courses />
      </>
  )
}

export default HomePage