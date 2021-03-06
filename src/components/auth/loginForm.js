import React from 'react'
import axios from 'axios'
import Auth from './userAuthentication'
import Flash from './flash'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data ={...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.data)
      .then(res => {
        Flash.setMessage('success', res.data.message)
        Auth.setToken(res.data.token)
        this.props.history.push('/map')
      })
      .catch(() => {
        this.setState({ error: 'Invalid Credentials'})
      })
  }

  render() {
    return(
      <div className="auth-main animate fadeIn slow">
        <div className="register animated zoomIn">
          <img className="auth-logo" src="../../assets/logo-light.png" />
          <form onSubmit={ this.handleSubmit }>
            <h2>LOGIN</h2>
            <label>
            Email
              <input
                onChange={ this.handleChange }
                name="email"
                type="email"
                value={ this.state.data.email }
              />
            </label>
            <label>
            Password
              <input
                onChange={ this.handleChange }
                type="password"
                name="password"
                value={ this.state.data.password }
              />
            </label>
            <button className="button pad-top">Login</button>
          </form>
          <p>Not a member? <Link to='/register'>Register Here</Link></p>
        </div>
      </div>
    )
  }
}

export default Login
