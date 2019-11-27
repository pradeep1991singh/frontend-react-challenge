import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Router from 'next/router'
import debounce from 'lodash/debounce'

import { Container, Input } from 'components'
import { searchRequest, updateSearchInput } from 'store/actions'

class SearchBox extends Component {
  static async getInitialProps({store, isServer, pathname, query: { q }}) {
    store.dispatch(updateSearchInput(q))
    if (isServer) {
      await store.dispatch(searchRequest({input: q, pageNumber: 1}))
    }
    return {}
  }

  componentDidMount () {
    if (this.props.input === '') {
      this.searchInput.focus()
    } else {
      Router.push(`/search?q=${this.props.input}`, `/search/${this.props.input}`)
    }
  }

  handleChange = event => this.props.updateSearchInput(event.target.value)

  handleKeyDown = event => (event.key === 'Enter') && this.handleChange(event)

  shouldComponentUpdate(nextProps) {
    if (nextProps.input !== this.props.input) this.sendSearchRequest()
    return true
  }

  sendSearchRequest = debounce(() => {
    if (this.props.input !== '') {
      Router.push(`/search?q=${this.props.input}`, `/search/${this.props.input}`)
      this.props.searchRequest({input: this.props.input, pageNumber: 1})
    }
  }, 500)

  render () {
    const { input, loading } = this.props
    return (
      <div>
        <Input
          value={input}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          getRef={(input) => {
            this.searchInput = input
          }}
          style={{fontWeight: 100, height: '55px', borderRadius: '5px'}} placeholder="Search username..."
          containerStyle={{display: 'flex', alignItems: 'center', borderRadius: '5px', height: '55px'}}
          isLoader={loading}
        />
        <style jsx>{`
          div {
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            padding: 5px;
            background-color: var(--bg-color);
            z-index: 1;
            margin-top: 30px;
          }
        `}</style>
      </div>
    )
  }
}

SearchBox.propTypes = {
  loading: PropTypes.bool.isRequired,
  input: PropTypes.string.isRequired,
  searchRequest: PropTypes.func.isRequired,
  updateSearchInput: PropTypes.func.isRequired
}

const mapStateToProps = ({ searchState: { loading, input } }) => ({
  loading,
  input
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { searchRequest, updateSearchInput },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
