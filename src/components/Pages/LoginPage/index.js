import React from 'react';
import { login } from './../../../api';
import './style.css';

class LoginForm extends React.Component {
  state = {
    password: '',
    username: '',
    errorMessage: ''
  }
  componentWillMount() {
    // eslint-disable-next-line no-unused-expressions
    sessionStorage.token ? this.props.history.push({
      pathname: sessionStorage.role === 'superadmin' ? '/SuperAdminDashboard' : '/StoreAdminDashboard',
    }) : null;
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  
  handleLogin = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      let data = login(this.state.username, this.state.password);
      data.then((data) => {
        if (!data.error) {
          sessionStorage.token = data.data.token;
          sessionStorage.user_id = data.data.user_id;
          sessionStorage.role = data.data.role;
          this.props.history.push({
            pathname: data.data.role === 'superadmin' ? '/SuperAdminDashboard' : '/StoreAdminDashboard',
          })
        }
        else {
          this.setState({errorMessage:data.message})
        }
      })
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <img className="rockin" src="rokinapp.png" />
            <div className="card">
              <div className="card-header">
                <h3>Sign In</h3>
               { this.state.errorMessage !== '' && <span style={{'color':'red'}}> {this.state.errorMessage} </span>}
              </div>
              <div className="card-body">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user" /></span>
                  </div>
                  <input type="text" className="form-control" placeholder="username" onChange={this.handleChange('username')} />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key" /></span>
                  </div>
                  <input type="password" className="form-control" placeholder="password" onChange={this.handleChange('password')} />
                </div>
                <div className="form-group">
                  <input type="submit" value="Login" className="btn btn-warning" onClick={this.handleLogin} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginForm;
