import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link>
        </div>
      );
    } else {
      return (
        <div>
          <p>side_bar</p>
        </div>
      )
    }
  }
}

export default SideBar;