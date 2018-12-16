// @External Dependencies
import React from 'react'
import { Button, Input } from 'reactstrap'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// @ Dependencies
import AwesomeIcon from './AwesomeIcon'

// @Component
const SearchBar = ({ onClick, onKeyUp }) => (
  <Wrapper>
    <CustomInput>
      <AwesomeIcon icon="search" />
      <Input onKeyUp={onKeyUp} type="text" placeholder="Buscar contacto..." />
    </CustomInput>
    <Button color="warning" onClick={onClick}>
      <AwesomeIcon icon="plus-circle" />
      Nuevo Contacto
    </Button>
  </Wrapper>
)

// @Proptypes
SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired
}

// @Export Component
export default SearchBar

// @Styles
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 30px 0 10px;
`

const CustomInput = styled.div`
  align-items: center;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 3px 10px;
  width: 260px;

  input {
    border: 0;
    width: 100%;
    font-size: 14px;
    margin-left: 10px;
  }

  i {
    color: #fab43d;
  }
`
