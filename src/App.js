import React, { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import CourseDetails from './components/CourseDetails/CourseDetails'
import LearnSession from './components/LearnSession/LearnSession'
import Itinerary from './components/Itinerary/Itinerary'
import Frontend from './components/Frontend/Frontend'
import Backend from './components/Backend/Backend'
import Learn from './components/Learn/Learn'

const App = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [open, setOpen] = useState(false)
  const matches = useMediaQuery('(max-width:955px)')
  const Element = () => {
    return (isOpen && !matches) ? (
      <div style={{ width: 'calc(100% - 120px)', marginLeft: '105px' }}>
          <Switch>
            <Route path="/" exact>
              <HomePage setIsOpen={setIsOpen} />
            </Route>
            <Route path="/itinerary" exact>
              <Itinerary setIsOpen={setIsOpen} />
            </Route>
            <Route path="/itinerary/frontend" exact>
              <Frontend setIsOpen={setIsOpen} />
            </Route>
            <Route path="/itinerary/backend" exact>
              <Backend setIsOpen={setIsOpen} />
            </Route>
            <Route path="/courses" exact>
              <Learn setIsOpen={setIsOpen} />
            </Route>
            <Route path="/courses/:id" exact>
              <CourseDetails setOpen={setOpen} setIsOpen={setIsOpen} />
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
        <Route path="/itinerary" exact>
          <Itinerary setIsOpen={setIsOpen} />
        </Route>
        <Route path="/itinerary/frontend" exact>
          <Frontend setIsOpen={setIsOpen} />
        </Route>
        <Route path="/itinerary/backend" exact>
          <Backend setIsOpen={setIsOpen} />
        </Route>
        <Route path="/courses" exact>
          <Learn setIsOpen={setIsOpen} />
        </Route>
        <Route path="/courses/:id" exact>
          <CourseDetails setOpen={setOpen} setIsOpen={setIsOpen} />
        </Route>
        <Route path="/courses/:id/learn" exact>
          <LearnSession setIsOpen={setIsOpen} />
        </Route>
      </Switch>
    )
  }
  
  return (
    <Router>
      { isOpen && <Navbar open={open} setOpen={setOpen} />}
      { isOpen && <Sidebar />}
      <Element />
      { isOpen && <Footer />}
    </Router>
  )
}

export default App