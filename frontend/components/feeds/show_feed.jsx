import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { withRouter } from "react-router";
import FollowContainer from '../follow/follow_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LikeContainer from '../like/like_container';

class ShowFeed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      feed: {},
      author: {}
    };
  }

  componentDidMount() {
    
    this.props.fetchFeed(this.props.match.params.feedId).then(
      response => {
        this.setState({ feed: response.feed });
        this.props.fetchFeedLikers(response.feed.id);
        this.props.fetchUser(response.feed.user_id).then(
          response => { this.setState({ author: response.user }); }
        );
      }
    );    
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.feedId !== this.props.match.params.feedId) {
      this.props.fetchFeed(this.props.match.params.feedId).then(
        response => {
          this.setState({ feed: response.feed });
          this.props.fetchFeedLikers(response.feed.id);
          this.props.fetchUser(response.feed.user_id).then(
            response => { this.setState({ author: response.user }); }
          );
        }
      );
    }
  }
  
  

  render() {
    const NavBarContainerWithRouter = withRouter(NavBarContainer);
    const author = this.state.author
    
    if (!this.state.feed.id) return null;

    return (
      <div className="show-feed-main">
        <NavBarContainerWithRouter />
        <div className="show-feed">
          <div>
            <img src={this.state.feed.photoUrl}/>
          </div>
          <div className="show-feed-side">
            <div>
              <div>head</div>
              <div><b>{author.username}</b></div>              
              <FollowContainer user={this.state.author} currentUser={this.props.currentUser} />              
              <div>
                <FontAwesomeIcon icon={['fas', 'ellipsis-v']} size="lg" />
              </div>
            </div>
            <div>{this.state.feed.body}</div>
            <div>
              <div># likes</div>
              <div>
                <LikeContainer feed_id={this.state.feed.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFeed;