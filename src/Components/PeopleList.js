// @External Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// @Dependencies
import RoundedImage from './RoundedImage'

// @Component
const PeopleList = ({ peopleList, onClick }) => (
  <Wrapper>
    <thead>
      <tr>
        <td>Nombre</td>
        <td>Descripción</td>
      </tr>
    </thead>
    <tbody>
      {peopleList.length > 0 &&
        peopleList.map(person => {
          // En caso de que el nombre sea demasiado largo, tomo únicamente las dos primeras palabras del string para no romper el diseño
          const name =
            person.name.split(' ').length > 2
              ? `${person.name.split(' ')[0]} ${person.name.split(' ')[1]}`
              : person.name

          return (
            <tr key={person.id}>
              <td>
                <div className="Home__client">
                  <RoundedImage image={person.photo} alt={person.name} />
                  <div>
                    <strong>{name}</strong>
                    <a
                      href="/"
                      onClick={event => onClick(event, person)}
                      className="Home__btnDelete">
                      Eliminar
                    </a>
                  </div>
                </div>
              </td>
              <td>{person.description}</td>
            </tr>
          )
        })}
    </tbody>
  </Wrapper>
)

// @Proptypes
PeopleList.propTypes = {
  peopleList: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

// @Export Component
export default PeopleList

// @Styles
const Wrapper = styled.table`
  background: white;
  border-spacing: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  width: 100%;

  .Home__client {
    align-items: center;
    display: flex;

    figure {
      margin-right: 10px;
    }

    a {
      display: block;
      position: absolute;
    }
  }

  td {
    padding: 15px 30px;
  }

  thead {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  tbody {
    td {
      border-bottom: 1px solid #ddd;

      &:first-child {
        border-right: 1px solid #ddd;
        width: 260px;
      }

      &:last-child {
        box-shadow: inset 6px 0 12px -5px rgba(0, 0, 0, 0.1);
      }

      a {
        color: #fab43d;
      }
    }
    tr {
      &:hover {
        .Home__btnDelete {
          opacity: 1;
        }
      }

      &:last-child td {
        border-bottom: 0;
      }
    }
  }
`
