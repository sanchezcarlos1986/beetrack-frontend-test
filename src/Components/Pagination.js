// @External Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// @ Dependencies
import AwesomeIcon from './AwesomeIcon'

// @Component
const Pagination = ({ onClick, currentPage, peopleList }) => (
  <Wrapper currentPage={currentPage}>
    {currentPage !== 1 && (
      <a href="/" onClick={event => onClick(event, currentPage, 'prev')}>
        <AwesomeIcon icon="arrow-circle-left" />
        Página Anterior
      </a>
    )}
    {peopleList.length === 10 && (
      <a href="/" onClick={event => onClick(event, currentPage, 'next')}>
        Siguiente Página
        <AwesomeIcon icon="arrow-circle-right" />
      </a>
    )}
  </Wrapper>
)

// @Proptypes
Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  peopleList: PropTypes.array.isRequired
}

// @Export Component
export default Pagination

// @Styles
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${props =>
    props.currentPage === 1 ? 'flex-end' : 'space-between'};
  margin-top: 20px;

  a {
    color: #555;
    text-decoration: none;

    &:first-child {
      i {
        margin-right: 10px;
      }
    }

    &:last-child {
      i {
        margin-left: 10px;
      }
    }
  }

  i {
    color: #fab43d;
    font-size: 18px;
  }
`
