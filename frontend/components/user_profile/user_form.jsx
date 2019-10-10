import React from 'react';
import { Link } from 'react-router-dom';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      new_password: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      username: this.props.currentUser.username
    })
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.editUser(user).then(
      this.props.history.push(`/users/${this.props.currentUser.id}`),
      this.props.history.push(`/users/${this.props.currentUser.id}/edit`)
    );
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
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div className="input-field">
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Current password"
            />
            <input type="password"
              value={this.state.new_password}
              onChange={this.update('new_password')}
              placeholder="New password"
            />
            <button>Change Password</button>
            <Link to={`/users/${this.props.currentUser.id}`} style={{ marginTop: '6px', fontFamily: "'Open Sans', sans- serif"}}>Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default UserEditForm;