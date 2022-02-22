import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Course from './components/Courses/Course/Course'

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Container style={{ marginLeft: '100px', width: 'calc(100% - 100px)' }}>
        <Course />
      </Container>
    </>
  )
}

export default App