import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FollowedUser from './followed_users';


class SideBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {users: []};
  }

  componentDidMount() {
    if (this.props.users) {
      this.setState({ users: Object.values(this.props.users) });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users !== this.props.users) {
      this.setState({users: Object.values(this.props.users)});
    }
  }


  render() {
    
    const followingUsers = this.state.users.map(
      user => {
        if (!this.props.users) { return null; }
        else {
          return <FollowedUser key={user.id} user={user} />
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