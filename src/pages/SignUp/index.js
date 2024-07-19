import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {LuEyeOff} from 'react-icons/lu'
import {RxEyeOpen} from 'react-icons/rx'

import './index.css'

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    isPasswordMatching: false,
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/singin')
  }

  onsubmitForm = async event => {
    event.preventDefault()

    const {username, password, confirmPassword} = this.state

    if (password === confirmPassword) {
      const userDetails = {username, password}
      const url = 'http://localhost/3000/signup'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      await response.json()
      if (response.ok === true) {
        this.onSubmitSuccess()
      }
    } else {
      this.setState({isPasswordMatching: true})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeConfirmPassword = event => {
    this.setState({confirmPassword: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
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

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className='input-label' htmlFor='password'>
          PASSWORD
        </label>
        <input
          type='text'
          id='password'
          className='password-input-filed'
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderConfirmPasswordField = () => {
    const {confirmPassword, showPassword, isPasswordMatching} = this.state

    const inputType = showPassword ? 'text' : 'password'

    return (
      <div className='confirm-pw-container'>
        <label className='input-label' htmlFor='password'>
          CONFIRM PASSWORD
        </label>
        <div className='confirm-password-container'>
          <input
            type={inputType}
            id='password'
            className='confirm-password-filed'
            value={confirmPassword}
            onChange={this.onChangeConfirmPassword}
          />
          {showPassword ? (
            <RxEyeOpen onClick={this.onClickShowPassword} />
          ) : (
            <LuEyeOff onClick={this.onClickShowPassword} />
          )}
        </div>
        {isPasswordMatching && (
          <p className='error-message'>Password is not matching!</p>
        )}
      </div>
    )
  }

  render() {
    return (
      <div className='bg-container'>
        <div className='signup-form-container'>
          <form className='form-container' onSubmit={this.onsubmitForm}>
            <h1 className='login-heading'>Signup</h1>
            <div className='input-container'>{this.renderUsernameField()}</div>
            <div className='input-container'>{this.renderPasswordField()}</div>
            <div className='input-container'>
              {this.renderConfirmPasswordField()}
            </div>

            <button type='submit' className='login-button'>
              Signup
            </button>
            <p className='no-account'>
              Already have an account?
              <Link to='/login'>
                <span className='signup-link'>Login</span>
              </Link>
            </p>
            <p className='line'>
              <hr width={100} height={0} margin={2} />
              Or
              <hr width={100} height={0} margin={2} />
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
      </div>
    )
  }
}

export default SignUp
