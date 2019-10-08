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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === 'login'){
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Instafeeds</h1>
            <br />
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
            <div>
              <br />
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                />
              </label>
              <br />
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}                
                />
              </label>
              <br />
              <input type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Instafeeds</h1>
            <br />
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
            <div>
              <br />
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>
              <br />
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                />
              </label>
              <br />
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <br />
              <input type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
      );
    }
  }
}

export default SessionForm;