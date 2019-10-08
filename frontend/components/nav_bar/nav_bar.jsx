import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Instafeeds</h1>
          <input type="text" placeholder="Search"/>
          <Link to="/">discover</Link>
          <span>mentions</span>
          <Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Instafeeds</h1>
          <Link to="/login">Log In</Link><br/>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  }    
}

export default NavBar;