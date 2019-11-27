import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { Container, AsyncRenderList, NotFound } from 'components'

const fetcherApiKeys = ['followers_url', 'following_url', 'repos_url']
const parseApiUrl = (url) => url.split('{')[0]
const apiDataValueKeyMap = {
  followers_url: 'login',
  following_url: 'login',
  repos_url: 'name'
}

class UserDetails extends Component {
  render() {
    const { username, user, loading } = this.props
    let userFieldKeys = [], userFieldValues = []
    if (!isEmpty(user)) {
      userFieldKeys = Object.keys(user)
      userFieldValues = Object.values(user)
    }

    return (
      <div>
        <Container style={{padding: '15px', borderRadius: '5px'}}>
          <h3>User details</h3>
          <div className="list">
            {userFieldKeys.map((key, index) =>
              <div className="list-item" key={key}>
                <p className="item-key">{key}</p>
                {!!~fetcherApiKeys.indexOf(key) && <p className="item-value"><AsyncRenderList apiUrl={parseApiUrl(userFieldValues[index])} valueKey={apiDataValueKeyMap[key]} /></p>}
                {!~fetcherApiKeys.indexOf(key) && <p className="item-value">{userFieldValues[index]}</p>}
              </div>
            )}
          </div>
          {!loading && !userFieldKeys.length && <NotFound />}
        </Container>
        <style jsx>{`
          .list-item {
            display: flex;
            border-bottom: 1px solid #e2e8f0;
            cursor: auto;
          }
          .item-key {
            width: 35%;
            font-weight: 400;
          }
          .item-value {
            width: 65%;
            font-size: 14px;
            font-weight: 100;
            word-wrap: break-word;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({ usersState: { loading } }) => ({
  loading
})

export default connect(mapStateToProps)(UserDetails)
