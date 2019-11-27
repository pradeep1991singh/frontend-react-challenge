import { Component } from 'react'
import store from 'store'
import { PageLayout, SearchBox, SearchResults } from 'components'
import { searchRequest, updateSearchInput } from 'store/actions'

class Search extends Component {
  static async getInitialProps({store, isServer, pathname, query: { q }}) {
    console.log(store, isServer, pathname, q)
    store.dispatch(updateSearchInput(q))
    if (isServer) {
      await store.dispatch(searchRequest({input: q, pageNumber: 1}))
    }
    return {}
  }

  render() {
    return (
      <PageLayout>
        <SearchBox />
        <SearchResults />
      </PageLayout>
    )
  }
}

export default store(Search)
