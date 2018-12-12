// @External Dependencies
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// @Dependencies
import RoundedImage from '../../Components/roundedImage'
import { getPeople } from '../../Redux/Actions'

class Home extends Component {
  state = {
    peopleList: []
  }

  async componentDidMount() {
    const { getPeople, peopleList } = this.props
    const result = await getPeople()
    result === 'GET_PEOPLE_OK' && this.setState({ peopleList })
  }

  render() {
    const { peopleList } = this.state

    return (
      <section>
        <header>title</header>
        <div>
          <input type="text" placeholder="buscar..." />
          <button>add</button>
        </div>
        <table>
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
                    <a href="/">Eliminar</a>
                  </td>
                  <td>{person.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <a href="/">Siguiente</a>
      </section>
    )
  }
}

/*
  @Store Connection: connect
  @Export Component
*/

const mapStateToProps = state => ({
  peopleList: state.people.peopleList
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPeople
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
