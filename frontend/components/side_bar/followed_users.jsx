import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserThumbContainer from '../user_thumbnail/user_thumbnail_container';

const followedUser = ({ user }) => {
  
    return (
      <li>
        <Link to={`/users/${user.id}`}>
          <UserThumbContainer user={user}/>
          <span>{user.username}</span>
        </Link>
      </li>
    );
  // } else {
  //   return (
  //     <li>
  //       <Link to={`/users/${user.id}`}>          
  //         <FontAwesomeIcon icon={['far', 'user']} size="3x" />
  //         <span>{user.username}</span>
  //       </Link>
  //     </li>
  //   );
  // }
}

export default followedUser;