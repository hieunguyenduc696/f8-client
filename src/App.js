import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import HomePage from './components/HomePage/HomePage'
import CourseDetails from './components/CourseDetails/CourseDetails'
import LearnSession from './components/LearnSession/LearnSession'

const App = () => {
  const [isOpen, setIsOpen] = useState(true)
  
  const Element = () => {
    return isOpen ? (
      <div style={{ width: 'calc(100% - 120px)', marginLeft: '105px' }}>
          <Switch>
            <Route path="/" exact>
              <HomePage setIsOpen={setIsOpen} />
            </Route>
            <Route path="/courses/:id" exact>
              <CourseDetails setIsOpen={setIsOpen} />
            </Route>
            <Route path="/courses/:id/learn" exact>
              <LearnSession setIsOpen={setIsOpen} />
            </Route>
          </Switch>
      </div>
    ) : (
      <Switch>
        <Route path="/" exact>
          <HomePage setIsOpen={setIsOpen} />
        </Route>
        <Route path="/courses/:id" exact>
          <CourseDetails setIsOpen={setIsOpen} />
        </Route>
        <Route path="/courses/:id/learn" exact>
          <LearnSession setIsOpen={setIsOpen} />
        </Route>
      </Switch>
    )
  }
  
  return (
    <Router>
      { isOpen && <Navbar />}
      { isOpen && <Sidebar />}
        {/* <div style={{ width: 'calc(100% - 120px)', marginLeft: '105px' }}>
          <Switch>
            <Route path="/" exact>
              <HomePage setIsOpen={setIsOpen} />
            </Route>
            <Route path="/courses/:id" exact>
              <CourseDetails setIsOpen={setIsOpen} />
            </Route>
            <Route path="/courses/:id/learn" exact>
              <LearnSession setIsOpen={setIsOpen} />
            </Route>
          </Switch>
        </div> */}
      <Element />
    </Router>
  )
}

export default App