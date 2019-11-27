import { Component } from 'react'
import store from 'store'
import { PageLayout, SearchBox } from 'components'
import { clearSearchInput } from 'store/actions'

class Home extends Component {
  static async getInitialProps({store, isServer, query: { q }}) {
    await store.dispatch(clearSearchInput())
    return {}
  }

  render () {
    return (
      <PageLayout>
        <SearchBox />
      </PageLayout>
    )
  }
}

export default store(Home)
