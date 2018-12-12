// @External Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// @Dependencies
import App from '../App'
import Home from '../Views/Home'

// @Component
const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  </App>
)

// @Export Component
export default AppRoutes
