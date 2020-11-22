import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

import Nav from './Components/Nav/Nav'
import Login from './Components/Login/Login'
import Inventory from './Components/Inventory/Inventory'
import Company from './Components/Company/Company'
import Department from './Components/Department/Department'

import Dashboard from './Components/Dashboard/Dashboard'




function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Login} />
                <Switch>
                  <Route path="/dashboard" exact >
                    <Nav>
                      <Dashboard />
                    </Nav>
                  </Route>
                  <Route path="/inventory" exact >
                    <Nav>
                      <Inventory />
                    </Nav>
                  </Route>
                  <Route path="/company" exact >
                    <Nav>
                      <Company />
                    </Nav>
                  </Route>
                  <Route path="/department" exact >
                    <Nav>
                      <Department />
                    </Nav>
                  </Route>
                </Switch>
        </Switch>
    </Router> 
    
  )
}

export default App
