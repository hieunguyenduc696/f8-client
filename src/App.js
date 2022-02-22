import React, { useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getCourses } from './actions/courses'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import HomePage from './components/HomePage/HomePage'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCourses())
  }, [dispatch])
  
  return (
    <>
      <Navbar />
      <Sidebar />
        <div style={{ width: 'calc(100% - 120px)', marginLeft: '110px' }}>
          <HomePage />
        </div>
    </>
  )
}

export default App