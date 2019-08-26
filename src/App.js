import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/homePage/homePage.component'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/'  component={HomePage} />
        <HomePage path='/hats'/>
      </Switch>
    </div>
  )
}

export default App;
