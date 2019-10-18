import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FollowedUser from './followed_users';
import UserThumbContainer from '../user_thumbnail/user_thumbnail_container';
import { isEqual } from 'lodash';


class SideBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {users: []};
  }

  componentDidMount() {
    
    this.props.fetchFollowing(this.props.currentUser.id).then(
      response => { 
        this.props.fetchUsers({ filter: { ids: response.following.followingArr.concat([this.props.currentUser.id]) } }).then(
          res => { this.setState({ users: Object.values(res.users) }) }
        );
      }
    )
  }

  componentDidUpdate(prevProps) {
    // if (!isEqual(prevProps.users, this.props.users)) {
    //   this.setState({users: Object.values(this.props.users)});
    // }
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
            <UserThumbContainer id="side-bar-thumb" user={this.props.currentUser} />
            <span>{this.props.currentUser.username}</span>
          </Link>
        </div>
        <div className="side-bar-section">
          <label>Stories</label>
          <ul>
            {followingUsers}
          </ul>
        </div>
        {/* <div className="side-bar-section">
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
        </div> */}
      </div>
    );
    
  }
}

export default SideBar;