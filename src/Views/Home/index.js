// @External Dependencies
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'

// @Dependencies
import { getPeople } from '../../Redux/Actions'
import SearchBar from '../../Components/searchBar'
import Header from '../../Components/header'
import PeopleList from '../../Components/peopleList'

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
      <Wrapper>
        <Header />
        <SearchBar />
        <PeopleList peopleList={peopleList} />
        <a href="/">Siguiente</a>
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
