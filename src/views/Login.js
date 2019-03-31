import React, {Component} from 'react';
import {login, register} from '../utils/MediaAPI';

class Login extends Component {

  state = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  success = (res) => {
    if (res.message === "Logged in successfully") {
      console.log("Logged in");
      this.setState(res);
        if (localStorage.getItem('count') !== "1") {
          localStorage.setItem('count', "1");
          localStorage.setItem('username', this.state.username);
          localStorage.setItem('password', this.state.password);
        }
      this.props.history.push("/home");
    } else {
      alert("Wrong username or password")
    }
  };

  checkLocal = () => {
    let uName = localStorage.getItem("username");
    let pWord = localStorage.getItem("password");
    if ((uName !== null && pWord !== null) && (uName !== "" && pWord !== "")) {
      login(uName, pWord).then(
          res => this.success(res))
    }
  };

  render() {
    this.checkLocal();
    return (
        <div>
          <h1>Login</h1>

          <input type="text" name="username" placeholder="username"
                 value={this.state.username}
                 onChange={this.handleInputChange}/>
          <input type="text" name="password" placeholder="password"
                 value={this.state.password}
                 onChange={this.handleInputChange}/>
                 <button onClick={() => login(this.state.username, this.state.password).then(
                     res => this.success(res)
                 )}>Login</button>



          <h1>Register</h1>
          <input type="text" name="username" placeholder="username"
                 value={this.state.username}
                 onChange={this.handleInputChange}/>
          <input type="text" name="password" placeholder="password"
                 value={this.state.password}
                 onChange={this.handleInputChange}/>
          <input type="text" name="email" placeholder="email"
                 value={this.state.email}
                 onChange={this.handleInputChange}/>
          <input type="text" name="full_name" placeholder="Full name (optional)"
                 value={this.state.full_name}
                 onChange={this.handleInputChange}/>
                 <button onClick={() => register(this.state.username, this.state.password, this.state.email, this.state.full_name).then(
                     data => {
                       console.log(data);
                       if (data.message === "User created successfully") {
                         login(this.state.username, this.state.password).then(
                             res => this.success(res))
                       } else {
                         console.log(data);
                       }
                     }
                 )}>Register</button>
        </div>
    );
  }
}

export default Login;