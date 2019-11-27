import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Container } from 'components'
import { changeThemeAction } from 'store/actions'

class SwitchTheme extends Component {

  toggleTheme = (event) => {
    const theme = event.target.checked ? 'dark' : 'light'
    event.target.checked
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.setAttribute('data-theme', 'light')
    this.props.changeThemeAction(theme)
  }

  render() {
    return (
      <>
        <Container style={{margin: '0px', padding: '0px'}}>
          <div className="theme-switch-wrapper">
            <em>Switch theme</em>
            <label className="theme-switch" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                ref="themeSwitch"
                onChange= { this.toggleTheme }
                checked={this.props.currentTheme === 'dark'}
              />
              <div className="slider round"></div>
            </label>
          </div>
        </Container>
        <style jsx>{`
          .theme-switch-wrapper {
            background-color: var(--bg-color);
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
            height: 33px;
            width: 100%;
          }
          em {
            margin-right: 10px;
            font-size: 14px;
          }
          .theme-switch {
            display: inline-block;
            height: 19px;
            position: relative;
            width: 35px;
          }
          .theme-switch input {
            display:none;
          }
          .slider {
            background-color: #ccc;
            bottom: 0;
            cursor: pointer;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transition: .4s;
          }
          .slider:before {
            background-color: #fff;
            bottom: 4px;
            content: "";
            height: 10px;
            left: 4px;
            position: absolute;
            transition: .4s;
            width: 10px;
          }
          input:checked + .slider {
            background-color: #66bb6a;
          }
          input:checked + .slider:before {
            transform: translateX(17px);
          }
          .slider.round {
            border-radius: 34px;
          }
          .slider.round:before {
            border-radius: 50%;
          }
        `}
        </style>
      </>
    )
  }
}

SwitchTheme.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  changeThemeAction: PropTypes.func.isRequired
}

const mapStateToProps = ({ themeState: { currentTheme } }) => ({
  currentTheme
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { changeThemeAction },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(SwitchTheme)
