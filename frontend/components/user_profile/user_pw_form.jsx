import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';


class UserEditPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        new_password: "",
        new_password2: ""
      },
      formType: "editPassword"
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      user: {
        username: this.props.currentUser.username
      }
    });
    this.props.clearErrors();
  }

  update(field) {
    return e => {
      const user = JSON.parse(JSON.stringify(this.state.user));
      user[field] = e.currentTarget.value;
      this.setState({ user: user });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.props.editUser(user).then(
      () => this.props.history.push(`/users/${this.props.currentUser.id}`)
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
      <div>
        <NavBarContainer />
        <div className="edit-form">

          <div className="edit-profile-side">
            <ul>              
              <Link to={`/users/${this.props.currentUser.id}/edit`}>
                <li>
                  <span>Edit Profile</span>
                </li>                   
              </Link>           
              <li>
                <span>Change Password</span>
              </li>
            </ul>
          </div>
          <div className="edit-main">
            <div id="editPW" className="edit-password">
              <div>
                <div id="editPicHolder">head pic</div>
                <h1>{this.props.currentUser.username}</h1>
              </div>
              <form onSubmit={this.handleSubmit}>
                <label>Old Password
                  <input type="password"
                    onChange={this.update('password')}
                  />
                </label>
                <label>New Password
                  <input type="password"
                    onChange={this.update('new_password')}
                  />
                </label>
                <label>Confirm New Password
                  <input type="password"
                    onChange={this.update('new_password2')}
                  />
                </label>
                <button>Change Password</button>
              </form>
            </div>
            {this.renderErrors()}
          </div>

        </div>
      </div>
    );
  }
}

export default UserEditPasswordForm;