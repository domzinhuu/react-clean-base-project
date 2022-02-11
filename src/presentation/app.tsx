import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from './pages'
import './styles/global.scss'
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
