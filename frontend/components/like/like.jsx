import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

class Like extends React.Component {

  constructor(props) {
    super(props)

    this.liking = this.liking.bind(this);
    this.unliking = this.unliking.bind(this);
  }

  liking() {
    this.props.likeFeed(this.props.feed_id)
  }
  
  unliking() {
    this.props.unlikeFeed(this.props.feed_id)
  }

  render() {
    if (!this.props.currentUser) {
      return (
        <div>
          <Link to="/login">
            <FontAwesomeIcon icon={['far', 'heart']} size="lg" />
          </Link>          
        </div>
      );
    } else if (this.props.likerIds.includes(this.props.currentUser.id)) {
      return (
        <div className="unlike">
          <FontAwesomeIcon onClick={this.unliking} icon={['fas', 'heart']} size="lg" />
        </div>
      );
    } else {
      return (
        <div>
          <FontAwesomeIcon onClick={this.liking} icon={['far', 'heart']} size="lg" />
        </div>
      );
    }
    
  }
}

export default Like;