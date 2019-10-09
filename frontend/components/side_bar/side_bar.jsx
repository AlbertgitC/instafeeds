import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SideBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <div className="side-bar">
        <div>
          <Link to={`/users/${this.props.currentUser.id}`}>
            <FontAwesomeIcon icon={['far', 'user']} size="4x" />
            <span>{this.props.currentUser.username}</span>
          </Link>
        </div>
        <div>
          <label>Stories</label>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={['far', 'user']} size="3x" />
                <span>followed_user01</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={['far', 'user']} size="3x" />
                <span>followed_user02</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={['far', 'user']} size="3x" />
                <span>followed_user03</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
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