// @External Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// @Component
const RoundedImage = ({ image, size, alt, marginBottom, marginRight }) => (
  <Wrapper
    size={size}
    marginBottom={marginBottom}
    marginRight={marginRight}
    className="RoundedImage">
    <img
      src={image && image !== '' ? image : ''}
      alt={alt}
      onError={e => {
        e.target.src = 'https://randomuser.me/api/portraits/women/90.jpg'
      }}
    />
  </Wrapper>
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
  border-radius: 50%;
  flex-shrink: 0;
  height: ${props => props.size}px;
  margin: 0 ${props => props.marginRight}px ${props => props.marginBottom}px 0;
  overflow: hidden;
  width: ${props => props.size}px;

  img {
    height: auto;
    max-width: 100%;
  }
`
