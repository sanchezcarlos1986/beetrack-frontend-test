// @External Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Components/styles'

// @Component
const App = ({ children }) => <StyledApp>{children}</StyledApp>

// @Proptypes
App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App

// @Styles
const StyledApp = styled.section.attrs({ className: 'PageBody' })`
  background: #e5e5e5;
  padding: 30px;
`
