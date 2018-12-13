// @External Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// @Dependencies
import RoundedImage from '../Components/roundedImage'

// @Component
const PeopleList = ({ peopleList }) => (
  <Wrapper>
    <thead>
      <tr>
        <td>Nombre</td>
        <td>Descripción</td>
      </tr>
    </thead>
    <tbody>
      {peopleList.length > 0 &&
        peopleList.map(person => (
          <tr key={person.id}>
            <td>
              <RoundedImage image={person.photo} alt={person.name} />
              <a href="/" className="Home__btnDelete">
                Eliminar
              </a>
            </td>
            <td>{person.description}</td>
          </tr>
        ))}
    </tbody>
  </Wrapper>
)

// @Proptypes
PeopleList.propTypes = {
  peopleList: PropTypes.array.isRequired
}

// @Export Component
export default PeopleList

// @Styles
const Wrapper = styled.table`
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  thead {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  tbody {
    td {
      padding: 15px 30px;
      border-bottom: 1px solid #ddd;

      &:first-child {
        border-right: 1px solid #ddd;
      }

      a {
        color: #fab43d;
      }
    }
    tr:hover {
      .Home__btnDelete {
        opacity: 1;
      }
    }
  }
`
