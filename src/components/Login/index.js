import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isPasswordChecked: false,
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    const {username, password} = this.state
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
  }

  onSubmitFailure = errMsg => {
    this.setState({showSubmitError: true, errorMsg: errMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          onChange={this.onChangeUsername}
          value={username}
          className="input-field"
          type="text"
          id="username"
          placeholder="Username"
        />
      </>
    )
  }

  //   onShowHidePassword = () => {
  //     this.setState(prevState => ({
  //       isPasswordChecked: !prevState.isPasswordChecked,
  //     }))
  //   }

  renderPassword = () => {
    const {password, isPasswordChecked} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          onChange={this.onChangePassword}
          value={password}
          className="input-field"
          type={isPasswordChecked ? 'text' : 'password'}
          id="password"
          placeholder="Password"
        />
        {/* <div className="show-hide-container">
          <input
            type="checkbox"
            id="show-password"
            checked={isPasswordChecked}
            onChange={this.onShowHidePassword}
          />
          <label className="input-label" htmlFor="show-password">
            Show Password
          </label>
        </div> */}
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-container">
        <img
          className="login-website-logo"
          src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1657426908/lg-devices-logo_rpfa68.png"
          alt="website logo"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          {/* <img
            className="login-website-logo"
            src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1656594712/Group_7399_wrvd0n.png"
            alt="website logo"
          /> */}
          <h1 className="login-text">Login</h1>
          <div className="input-container">{this.renderUsername()}</div>
          <div className="input-container">{this.renderPassword()}</div>
          {showSubmitError && <p className="login-err-msg">*{errorMsg}</p>}
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default Login
