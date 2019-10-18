import React from 'react';
import { Link } from 'react-router-dom';
import UserThumbContainer from '../user_thumbnail/user_thumbnail_container';

class Follow extends React.Component {

  constructor(props) {
    super(props)
    this.state = { followed_id: "", follower_id: ""}

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.update = this.update.bind(this);
    this.closeUnfollow = this.closeUnfollow.bind(this);
  }

  componentDidMount() {
    
  }

  update() {
    return e => {
      this.setState({
        followed_id: this.props.user.id,
        follower_id: this.props.currentUser.id
      });
    } 
  }

  handleFollow(e) {
    e.preventDefault();
    const follow = Object.assign({}, this.state);
    this.props.followUser(follow);
  }

  handleUnfollow(e) {
    e.preventDefault();
    const follow = Object.assign({}, this.state);
    this.props.unfollowUser(follow).then(
      () => {
        this.closeUnfollow();
        this.setState({
          followed_id: "",
          follower_id: ""
        });
      }
    );
  }

  openUnfollow() {
    document.getElementById("unfollow-overlay").style.display = "block";
  }

  closeUnfollow() {
    document.getElementById("unfollow-overlay").style.display = "none";
  }

  render() {
    if (!this.props.currentUser) {      
      return(
        <div className="follow">
            <Link to="/login"><button>Follow</button></Link>            
        </div>        
      );
    } else if (this.props.currentUser.followedUserIds.includes(this.props.user.id)) {
      return (
        <div className="following">
          <button onClick={this.openUnfollow}>Following</button>
          <div id="unfollow-overlay" className="overlay">
            <div className="overlay-content">
              <form className="following-form" onSubmit={this.handleUnfollow}>                
                <UserThumbContainer id="unfollow-thumb" user={this.props.user} />
                <ul>
                  <li>{`Unfollow ${this.props.user.username}?`}</li>
                  <button onClick={this.update()}>Unfollow</button>                
                  <li onClick={this.closeUnfollow}>Cancel</li> 
                </ul>                                 
              </form>              
            </div>
          </div>
        </div>
      );
    } else if (this.props.currentUser.id === this.props.user.id) {
      return null;
    } else {
      return (
        <div className="follow">
          <form onSubmit={this.handleFollow}>
            <button onClick={this.update()}>Follow</button>
          </form>
        </div>
      );
    }
  }
}

export default Follow;