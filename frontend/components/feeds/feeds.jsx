import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isEqual } from 'lodash';
import FeedFormContainer from '../feeds/feed_form_container';


class Feeds extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {feeds: {}};
    this.rerenderFeeds = this.rerenderFeeds.bind(this);
  }

  componentDidMount() {
    if (this.props.user_ids) {
      this.props.fetchUsers(this.props.user_ids);
      // let feedIds = this.props.user_ids
      // .push(this.props.currentUser.id);
      // this.props.fetchFeeds(feedIds).then(
      this.props.fetchFeeds(this.props.user_ids.concat(this.props.currentUser.id)).then(
        (action) => { this.setState({ feeds: action.feeds }); }
      );
    }
   
  }

  componentDidUpdate(oldProps) {
    if (!isEqual(oldProps.user_ids, this.props.user_ids)) {
      
      this.props.fetchUsers(this.props.user_ids);
      // let feedIds = []
      // feedIds.this.props.user_ids
      // .push(this.props.currentUser.id);
      this.props.fetchFeeds(this.props.user_ids.concat(this.props.currentUser.id)).then(
        (action) => { this.setState({ feeds: action.feeds }); }
      );
    }
  }

  closeForm() {
    document.getElementById("feedForm").style.display = "none";
  }

  rerenderFeeds() {
    this.props.fetchFeeds(this.props.user_ids.concat(this.props.currentUser.id)).then(
      (action) => { this.setState({ feeds: action.feeds }); }
    );
  }

  feedLis() {
    if (isEqual(this.state.feeds, {})) {return null;}
    else {
      let feedItems = Object.values(this.state.feeds);
      
      let postlis = feedItems.map(
        feed => {
          return (
            <li key={feed.id}>
              <div>
                <label>author's pic</label>
                <span>{this.props.users[feed.user_id].username}</span> 
              </div>
              <div>picture here</div>
              <p>{feed.body}</p>
            </li>
          );
        }
      );

      return postlis;
    }
    
  }

  render() {
    return (
      <div className="feeds-main">
        <ul>
          {this.feedLis()}
        </ul>
        <div id="feedForm" className="overlay">
          <div className="overlay-content">
            <FeedFormContainer rerenderFeeds={this.rerenderFeeds}/>
            <button onClick={this.closeForm}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Feeds;