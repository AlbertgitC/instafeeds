import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout().then(
      this.props.history.push('/login')
    );
  }

  render() {

    if (this.props.currentUser) {
      return (
        <div>
          <NavBarContainer />
          <h2>{this.props.currentUser.username}</h2>
          <ul>Edit Profile
            <li>
              <button>Change Password</button>
            </li>
            <li>
              <button onClick={this.logout}>Log Out</button>
            </li>
            <li>
              <button>Cancel</button>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <NavBarContainer />
          <h2>targeted_user_name</h2>
        </div>
      );
    }
  }

}

export default Index;