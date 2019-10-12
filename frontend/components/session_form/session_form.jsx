import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.formType === 'Log In') {
      this.props.processForm(user).then(
        (user) => this.props.fetchFollowing(user.id)
      );
    } else {
      this.props.processForm(user);
    }
  }


  renderErrors() {
    return (
      <ul id="errors">
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin() {
    this.setState({
      username: "DemoAccount",
      password: "demo1234",
      email: "DemoAccount"
    });
  }

  render() {
    if (this.props.formType === 'Log In'){
      return (
        <div className="session-form">
          <form onSubmit={this.handleSubmit}>
            <h1>Instafeeds</h1>
            <br />
            {this.renderErrors()}
            <div className="input-field">                    
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />        
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"                
              />
              <button>{this.props.formType}</button>
            </div>
          </form>
          <div>
            <p onClick={this.props.clearErrors}>Don't have an account? {this.props.navLink}</p>
            <p>or</p>
            <form onSubmit={this.handleSubmit}>
              <button onClick={this.demoLogin} id="demo">Demo Log In</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="session-form">
          <form onSubmit={this.handleSubmit}>
            <h1>Instafeeds</h1>            
            <p>Sign up to see what all the pets are up to!</p>                       
            <br />
            {this.renderErrors()}
            <div className="input-field">      
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />           
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />          
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <button>{this.props.formType}</button>
              <p>By signing up, you agree to our <b>Terms</b> , <b>Data</b> <b>Policy</b>  and <b>Cookies</b> <b>Policy</b> .</p>
            </div>
          </form>
          <div>
            <p onClick={this.props.clearErrors}>Have an account? {this.props.navLink}</p>
          </div>
        </div>
      );
    }
  }
}

export default SessionForm;