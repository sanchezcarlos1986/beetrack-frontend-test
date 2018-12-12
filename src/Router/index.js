// @External Dependencies
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// @Dependencies
import App from '../App'
import Dashboard from '../views/Dashboard'

// @Component
const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Login} />
      <RutaPrivada
        exact
        path="/dashboard"
        finalPath="dashboard"
        component={Dashboard}
      />
      <Route component={PageError} />
    </Switch>
  </App>
)

// @Export Component
export default AppRoutes

const PrivateRoute = ({ component: Component, loggedUser, ...rest }) => {
  window.scroll(0, 0)
  return (
    <Route
      {...rest}
      render={props =>
        isAllowed(loggedUser, rest.finalPath) ? (
          <AppFrame>
            <Component {...props} user={loggedUser} />
          </AppFrame>
        ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location, protected: true }
              }}
            />
          )
      }
    />
  )
}

// @Store Connection: connect
const mapStateToProps = state => ({ loggedUser: state.loggedUser })
const RutaPrivada = connect(
  mapStateToProps,
  null
)(PrivateRoute)
