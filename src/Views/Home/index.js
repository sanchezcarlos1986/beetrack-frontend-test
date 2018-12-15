// @External Dependencies
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import styled from 'styled-components'

// @Dependencies
import { getPeople, addPeople, deletePeople } from '../../Redux/Actions'
import SearchBar from '../../Components/searchBar'
import Header from '../../Components/header'
import PeopleList from '../../Components/peopleList'
import ModalCustom from '../../Components/modal'
import Pagination from '../../Components/pagination'

class Home extends Component {
  state = {
    peopleList: [],
    modal: false,
    search: '',
    alertMessage: ''
  }

  async componentDidMount() {
    const { getPeople } = this.props
    const result = await getPeople()
    result === 'GET_PEOPLE_OK' &&
      this.setState({ peopleList: this.props.peopleList })
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  updateSearch = event => {
    const { peopleList, search } = this.state
    this.setState({ search: event.target.value.substr(0, 20) }, () => {
      const filteredPeopleList = peopleList
        ? peopleList.filter(
            contact =>
              contact.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        : peopleList

      this.setState({
        peopleList: filteredPeopleList
      })
    })
  }

  handleAdd = async data => {
    const { addPeople } = this.props
    const { peopleList } = this.state
    const result = await addPeople(data)
    let alertMessage

    if (result.message === 'ADD_PEOPLE_OK') {
      if (peopleList.length < 10) {
        peopleList.push(result.data)
        alertMessage =
          'El contacto fue agregado correctamente al final de la página.'
      } else {
        alertMessage =
          'El contacto fue agregado correctamente al final de la lista.'
      }

      this.setState(
        {
          modal: !this.state.modal,
          peopleList,
          alertMessage
        },
        () => {
          setTimeout(() => {
            this.setState({ alertMessage: '' })
          }, 4000)
        }
      )
    }
  }

  handleDelete = async (event, person) => {
    event.preventDefault()
    const { deletePeople } = this.props
    const { peopleList } = this.state
    const result = await deletePeople(person, peopleList)
    const updatedList = peopleList.filter(contact => contact.id !== person.id)
    result === 'DELETE_PEOPLE_OK' && this.setState({ peopleList: updatedList })
  }

  setPagination = async (event, currentPage, direction) => {
    event.preventDefault()
    const { getPeople } = this.props
    const pageToGo = () => {
      const page = direction === 'next' ? currentPage + 1 : currentPage - 1
      return page
    }

    const result = await getPeople(pageToGo())
    result === 'GET_PEOPLE_OK' &&
      this.setState({ peopleList: this.props.peopleList })
  }

  render() {
    const { peopleList, modal, alertMessage } = this.state
    const { currentPage } = this.props

    return (
      <Wrapper>
        {alertMessage !== '' && (
          <AlertUI>
            <Alert color="success">{alertMessage}</Alert>
          </AlertUI>
        )}
        <Header />
        <SearchBar onClick={this.toggleModal} onChange={this.updateSearch} />
        <ModalCustom
          modal={modal}
          toggle={this.toggleModal}
          onAdd={this.handleAdd}
        />

        {peopleList && peopleList.length > 0 ? (
          <PeopleList peopleList={peopleList} onClick={this.handleDelete} />
        ) : (
          <h2>No tiene contactos.</h2>
        )}

        <Pagination
          onClick={this.setPagination}
          peopleList={peopleList}
          currentPage={currentPage}
        />
      </Wrapper>
    )
  }
}

/*
  @Store Connection: connect
  @Export Component
*/

const mapStateToProps = state => ({
  peopleList: state.people.peopleList,
  currentPage: state.people.currentPage
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPeople,
      addPeople,
      deletePeople
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

const Wrapper = styled.section`
  header {
    img {
      max-width: 200px;
    }
  }

  .Home__btnDelete {
    opacity: 0;
    transition: opacity 0.25s;
  }
`

const AlertUI = styled.div`
  .alert {
    animation: showAlert 4s forwards;
    background: #2ecc71;
    border: 0;
    color: white;
    font-size: 20px;
    left: 0;
    position: fixed;
    width: 100%;
  }

  @keyframes showAlert {
    0% {
      top: -55px;
    }
    15% {
      top: 0;
    }
    85% {
      top: 0;
    }
    100% {
      top: -55px;
    }
  }
`
