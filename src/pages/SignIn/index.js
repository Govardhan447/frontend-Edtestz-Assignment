import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

import './index.css'

class SignIn extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'http://localhost/3000/signin'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className='input-label' htmlFor='password'>
          PASSWORD
        </label>
        <input
          type='password'
          id='password'
          className='password-input-filed'
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className='input-label' htmlFor='username'>
          USERNAME
        </label>
        <input
          type='text'
          id='username'
          className='username-input-filed'
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <div className='login-form-container'>
        <form className='signin-form-container' onSubmit={this.submitForm}>
          <h1 className='login-heading'>login</h1>
          <div className='input-container'>{this.renderUsernameField()}</div>
          <div className='input-container'>{this.renderPasswordField()}</div>
          <p className='forgot-password'>forgot password?</p>
          <button type='submit' className='login-button'>
            Login
          </button>
          <p className='no-account'>
            Do not have an account?
            <Link to='/signup' className='signup-link'>
              SignUp
            </Link>
          </p>

          <p className='line'>
            <hr width={100} height={0} />
            Or
            <hr width={100} height={0} />
          </p>

          <button type='button' className='facebook-btn'>
            <FaFacebook className='fb-icon' />
            <p className='login-text'>Login with Facebook</p>
          </button>
          <button type='button' className='google-btn'>
            <FcGoogle className='g-icon' />
            <p className='login-text'>Login with Google</p>
          </button>
        </form>
      </div>
    )
  }
}

export default SignIn
