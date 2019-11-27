import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import { UserCard, Button, Loader, NotFound } from 'components'
import { searchRequest } from 'store/actions'

const SearchResults = ({ users, pageNumber, input, searchRequest, loading, hasNextPage }) => (
  <div className="search-results">
    {loading && <Loader style={{marginTop: '10px'}} />}
    {!loading && users && users.map(user => <UserCard user={user} key={user.id} />)}
    {!loading && hasNextPage ? (
      <Button
        style={{margin: '10px 0', fontSize: '14px'}}
        onClick={() => searchRequest({input, pageNumber: pageNumber + 1})}
        disabled={loading}
      >Load Next</Button>
    ) : null }
    {!loading && !users.length && <NotFound />}
    <style jsx>{`
      .search-results {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 110px;
      }
    `}</style>
  </div>
)

SearchResults.propTypes = {
  users: PropTypes.array.isRequired,
  pageNumber: PropTypes.number.isRequired,
  input: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  searchRequest: PropTypes.func.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
}

const mapStateToProps = ({
  searchState: { loading, pageNumber, input, hasNextPage }, usersState: { users }
}) => ({
  users: Object.values(users),
  pageNumber,
  input,
  loading,
  hasNextPage
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { searchRequest },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
