// @External Dependencies
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'

// @Dependencies
import { getPeople } from '../../Redux/Actions'
import SearchBar from '../../Components/searchBar'
import AwesomeIcon from '../../Components/awesomeIcon'
import Header from '../../Components/header'
import PeopleList from '../../Components/peopleList'
import ModalCustom from '../../Components/modal'

class Home extends Component {
  state = {
    peopleList: [],
    modal: false
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

  render() {
    const { peopleList, modal } = this.state

    return (
      <Wrapper>
        <Header />
        <SearchBar onClick={this.toggleModal} />
        <ModalCustom modal={modal} toggle={this.toggleModal} />
        <PeopleList peopleList={peopleList} />
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
      getPeople
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
