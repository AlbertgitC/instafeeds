import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FollowedUser from './followed_users';


class SideBar extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.currentUser.followedUserIds.map(
      id => { this.props.fetchUser(id); }
    );
  }

  render() {

    const followingUsers = this.props.currentUser.followedUserIds.map(
      id => {
        if (!this.props.users[id]) { return null; }
        else {
          return <FollowedUser key={id} user={this.props.users[id]} />
        }        
      }
    );
    
    return (
      <div className="side-bar">
        <div>
          <Link to={`/users/${this.props.currentUser.id}`}>
            <FontAwesomeIcon icon={['far', 'user']} size="4x" />
            <span>{this.props.currentUser.username}</span>
          </Link>
        </div>
        <div className="side-bar-section">
          <label>Stories</label>
          <ul>
            {followingUsers}
          </ul>
        </div>
        <div className="side-bar-section">
          <label>Suggestions For You</label>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={['far', 'user']} size="3x" />
                <span>suggested_user01</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={['far', 'user']} size="3x" />
                <span>suggested_user02</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={['far', 'user']} size="3x" />
                <span>suggested_user03</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
    
  }
}

export default SideBar;