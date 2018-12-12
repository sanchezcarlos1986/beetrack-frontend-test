// @External Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'

// @Dependencies
import { store, persistor } from './Redux/Store'
import AppRoutes from './Router'

// @Render
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <AppRoutes />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
