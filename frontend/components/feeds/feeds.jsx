import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isEqual } from 'lodash';
import FeedFormContainer from '../feeds/feed_form_container';
import UserThumbContainer from '../user_thumbnail/user_thumbnail_container';


class Feeds extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {feeds: {}};
    this.rerenderFeeds = this.rerenderFeeds.bind(this);
  }

  componentDidMount() {
    if (this.props.user_ids) { 
      this.props.fetchUsers({ filter: { ids: this.props.user_ids.concat([this.props.currentUser.id]) }});
      this.props.fetchFeeds({ids: this.props.user_ids.concat(this.props.currentUser.id)}).then(
        (action) => { this.setState({ feeds: action.feeds }); }
      );
    }
   
  }

  componentDidUpdate(oldProps) {
    if (!isEqual(oldProps.user_ids, this.props.user_ids)) {
      
      this.props.fetchUsers({filter: {ids: this.props.user_ids}});
      this.props.fetchFeeds({ids: this.props.user_ids.concat(this.props.currentUser.id)}).then(
        (action) => { this.setState({ feeds: action.feeds }); }
      );
    }
  }

  closeForm() {
    document.getElementById("feedForm").style.display = "none";
  }

  rerenderFeeds() {
    this.props.fetchFeeds({ids: this.props.user_ids.concat(this.props.currentUser.id)}).then(
      (action) => { this.setState({ feeds: action.feeds }); }
    );
  }

  feedLis() {
    if (isEqual(this.state.feeds, {})) {return null;}
    else {
      let feedItems = Object.values(this.state.feeds).reverse();
      
      let postlis = feedItems.map(
        feed => {
          return (
            <div key={feed.id} className="feed">
              <div>
                <Link to={`/users/${feed.user_id}`} >
                  <UserThumbContainer id="feed-thumb" user={this.props.users[feed.user_id]}/>
                </Link> 
                <Link to={`/users/${feed.user_id}`} >
                  <span>{this.props.users[feed.user_id].username}</span>
                </Link>
              </div>
              <div>
                <Link to={`/feeds/${feed.id}`}>
                  <img src={feed.photoUrl}/>
                </Link>      
              </div>
              <div>
                <p><b>{this.props.users[feed.user_id].username}</b> {feed.body}</p>
              </div>
            </div>
          );
        }
      );

      return postlis;
    }
    
  }

  render() {
    return (
      <div className="feeds-main">
        <div>
          {this.feedLis()}
        </div>
        <div id="feedForm" className="overlay">
          <div className="feedForm-overlay-content">
            <FeedFormContainer rerenderFeeds={this.rerenderFeeds}/>
            <button onClick={this.closeForm}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Feeds;