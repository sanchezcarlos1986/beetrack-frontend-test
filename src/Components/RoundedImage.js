// @External Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// @Component
const RoundedImage = ({ image, size, marginBottom, marginRight }) => (
  <Wrapper
    size={size}
    image={image}
    marginBottom={marginBottom}
    marginRight={marginRight}
    className="RoundedImage"
  />
)

// @Proptypes
RoundedImage.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.string.isRequired,
  marginBottom: PropTypes.number,
  marginRight: PropTypes.number,
  size: PropTypes.number
}

RoundedImage.defaultProps = {
  alt: 'Rounded Image',
  marginBottom: 0,
  marginRight: 0,
  size: 50
}

// @Export Component
export default RoundedImage

// @Styles
const Wrapper = styled.figure`
  background: url(${props => props.image}) center / cover;
  border-radius: 50%;
  flex-shrink: 0;
  height: ${props => props.size}px;
  margin: 0 ${props => props.marginRight}px ${props => props.marginBottom}px 0;
  overflow: hidden;
  width: ${props => props.size}px;
`
