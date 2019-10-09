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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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


  render() {
    if (this.props.formType === 'Log In'){
      return (
        <div className="session-form">
          <form onSubmit={this.handleSubmit}>
            <h1>Instafeeds</h1>
            <br />
            <p onClick={this.props.clearErrors}>Please {this.props.formType} or {this.props.navLink}</p>
            {this.renderErrors()}
            <div>                    
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
              <input type="submit" value={this.props.formType} />
            </div>
          </form>
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
            <div>      
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