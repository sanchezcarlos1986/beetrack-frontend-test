// @External Dependencies
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'

// @Dependencies
import { getPeople, deletePeople } from '../../Redux/Actions'
import SearchBar from '../../Components/searchBar'
import AwesomeIcon from '../../Components/awesomeIcon'
import Header from '../../Components/header'
import PeopleList from '../../Components/peopleList'
import ModalCustom from '../../Components/modal'

class Home extends Component {
  state = {
    peopleList: [],
    modal: false,
    search: ''
  }

  async componentDidMount() {
    const { getPeople, peopleList } = this.props
    const result = await getPeople()
    result === 'GET_PEOPLE_OK' && this.setState({ peopleList })
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  updateSearch = event =>
    this.setState({ search: event.target.value.substr(0, 20) })

  handleDelete = async (event, person) => {
    event.preventDefault()
    const { deletePeople } = this.props
    const { peopleList } = this.state
    const result = await deletePeople(person, peopleList)
    const updatedList = peopleList.filter(contact => contact.id !== person.id)
    result === 'DELETE_PEOPLE_OK' && this.setState({ peopleList: updatedList })
    // Acá tengo que hacer un dispatch con la nueva lista
  }

  render() {
    const { peopleList, modal, search } = this.state
    const filteredPeopleList = peopleList.length
      ? peopleList.filter(
          contact =>
            contact.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
      : peopleList

    return (
      <Wrapper>
        <Header />
        <SearchBar onClick={this.toggleModal} onChange={this.updateSearch} />
        <ModalCustom modal={modal} toggle={this.toggleModal} />
        <PeopleList
          peopleList={filteredPeopleList}
          onClick={this.handleDelete}
        />
        <BtnNext>
          <a href="/">
            Siguiente Página
            <AwesomeIcon icon="arrow-circle-right" />
          </a>
        </BtnNext>
      </Wrapper>
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
      getPeople,
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

const BtnNext = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 0;

  a {
    color: #555;
    text-decoration: none;
  }

  i {
    color: #fab43d;
    font-size: 18px;
    margin-left: 10px;
  }
`
