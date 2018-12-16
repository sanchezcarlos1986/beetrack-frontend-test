// @External Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// @Component
const AwesomeIcon = ({ icon }) => <i className={`fas fa-${icon}`} />

// @Proptypes
AwesomeIcon.propTypes = {
  icon: PropTypes.string.isRequired
}

// @Export Component
export default AwesomeIcon
