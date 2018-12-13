// @External Dependencies
import React from 'react'
import styled from 'styled-components'

// @Component
const SearchBar = () => (
  <Wrapper>
    <input type="text" placeholder="Buscar contacto..." />
    <button>Nuevo Contacto</button>
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

  input {
    padding: 10px;
    border
  }

  button {
    background: #FAB43D;
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
    border: 0;
    align-self: flex-end;
  }
`
