import { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Container } from 'components'
import {
  getUserFollowersCountAction,
  getUserFollowingCountAction
} from 'store/actions'

class UserCard extends Component {
  componentDidMount() {
    this.props.getUserFollowersCountAction(this.props.user.login)
    this.props.getUserFollowingCountAction(this.props.user.login)
  }

  goToDetailsPage = () =>
    Router.push(`/user?username=${this.props.user.login}`, `/user/${this.props.user.login}`)

  render() {
    const { login, avatar_url, followers_count = 0, following_count = 0 } = this.props.user
    return (
      <div onClick={this.goToDetailsPage}>
        <Container style={{ height: '75px', padding: '0px', borderRadius: '5px' }}>
          <div className="card">
            <img className="card-img" src={avatar_url} alt={login} />
            <div className="card-body">
              <h4 className="card-title">{login}</h4>
              <p className="card-text">
                {`Followers - ${followers_count}`} |&nbsp;
                {`Following - ${following_count}`}
              </p>
            </div>
          </div>
        </Container>
        <style jsx>{`
          .card {
            display: flex;
            font-weight: 300;
            cursor: pointer;
            position: relative;
            box-shadow: 0 1px 2px #eaeaea;
            -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .card::after {
            content: "";
            border-radius: 5px;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            opacity: 0;
            -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .card:hover::after {
              opacity: 1;
          }
          .card-img {
            width: 75px;
            height: 75px;
            float: left;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 5px 0 0 5px;
          }
          .card-body {
            padding-left: 10px;
            float: left;
            color: #586069;
            border-radius: 0 5px 5px 0;
          }
          .card-title {
            margin: 10px 5px;
            font-weight: 200;
          }
          .card-text {
            margin: 10px 5px;
            font-size: 14px;
          }
        `}
        </style>
      </div>
    )
  }
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  getUserFollowersCountAction: PropTypes.func.isRequired,
  getUserFollowingCountAction: PropTypes.func.isRequired,
  followersCount: PropTypes.number,
  followingCount: PropTypes.number
}

const mapStateToProps = ({ usersState: { followersCount, followingCount } }) => ({
  followersCount,
  followingCount
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getUserFollowersCountAction, getUserFollowingCountAction },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
