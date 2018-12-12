// @External Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// @Dependencies
import {
  // getOnePeople
} from '../../actions'

// @Component
class AppFrame extends Component {
  render() {
    const { children } = this.props

    return (
      <StyledFrame className="StyledFrame">
        <main>{React.cloneElement(children)}</main>
      </StyledFrame>
    )
  }
}

// @Proptypes
AppFrame.propTypes = {
  children: PropTypes.element.isRequired
}

/*
  @Store Connection: connect
  @Routing: withRouter
  @Export Component
*/
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ble
    },
    dispatch
  )
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppFrame)
)

// @Styles
const StyledFrame = styled.section`
 
`