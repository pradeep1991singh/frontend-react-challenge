import { Component } from 'react'
import PropTypes from 'prop-types'
import store from 'store'
import { PageLayout, UserDetails } from 'components'
import { getUserDetailsAction } from 'store/actions'

class User extends Component {
  static async getInitialProps({ store, query: { username } }) {
    debugger
    if (!store.getState().usersState.users[username]) {
      await store.dispatch(getUserDetailsAction(username))
    }
    const user = store.getState().usersState.users[username]
    return {
      username,
      user
    }
  }

  render() {
    return (
      <PageLayout>
        <UserDetails username={this.props.username} user={this.props.user} />
      </PageLayout>
    )
  }
}

User.propTypes = {
  username: PropTypes.string.isRequired,
}

export default store(User)
