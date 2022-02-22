import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { getCourses } from './actions/courses'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import HomePage from './components/HomePage/HomePage'
import CourseDetails from './components/CourseDetails/CourseDetails'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCourses())
  }, [dispatch])
  
  return (
    <Router>
      <Navbar />
      <Sidebar />
        <div style={{ width: 'calc(100% - 120px)', marginLeft: '105px' }}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/courses/:id" exact>
              <CourseDetails />
            </Route>
          </Switch>
        </div>
    </Router>
  )
}

export default App