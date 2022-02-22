import React from 'react'

import HomeCarousel from './Carousel'

import useStyles from './styles'

const HomePage = () => {
  const classes = useStyles()

  return (
      <>
        <HomeCarousel />
      </>
  )
}

export default HomePage