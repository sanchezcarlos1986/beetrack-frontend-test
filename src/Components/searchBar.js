// @External Dependencies
import React from 'react'
import styled from 'styled-components'

// @ Dependencies
import AwesomeIcon from './awesomeIcon'

// @Component
const SearchBar = () => (
  <Wrapper>
    <CustomInput>
      <AwesomeIcon icon="search" />
      <input type="text" placeholder="Buscar contacto..." />
    </CustomInput>
    <button>
      <AwesomeIcon icon="plus-circle" />
      Nuevo Contacto
    </button>
  </Wrapper>
)

// @Export Component
export default SearchBar

// @Styles
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 30px 0 10px;

  button {
    align-self: flex-end;
    background: #fab43d;
    border-radius: 3px;
    border: 0;
    color: white;
    font-size: 16px;
    padding: 10px;

    i {
      margin-right: 10px;
    }
  }
`

const CustomInput = styled.div`
  align-items: center;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
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
