import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FollowContainer from '../follow/follow_container';
import { withRouter } from "react-router";



class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state;
    this.userProfile = {};
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchFollowing(this.props.match.params.userId);
    this.props.fetchFollowers(this.props.match.params.userId);
  }

  componentDidUpdate() {
    if (!this.props.user) {
      this.props.fetchUser(this.props.match.params.userId);
      this.props.fetchFollowing(this.props.match.params.userId);
      this.props.fetchFollowers(this.props.match.params.userId);
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  logout() {
    this.props.logout().then(
      () => this.props.history.push('/login')
    );
  }

  followingNum() {
    if (!this.props.user.followedUserIds)
      return 0;
    else {
      return this.props.user.followedUserIds.length;
    }
  }

  followersNum() {
    if (!this.props.user.followerIds)
      return 0;
    else {
      return this.props.user.followerIds.length;
    }
  }

  openNav() {
    document.getElementById("editNav").style.display = "block";
  }

  closeNav() {
    document.getElementById("editNav").style.display = "none";
  }


  render() {
    const NavBarContainerWithRouter = withRouter(NavBarContainer);
    if (!this.props.user || !this.props.user.username) return null;
    if (this.props.currentUser && this.props.currentUser.id === this.props.user.id) {
      return (
        <div className="user-profile-page">
          <NavBarContainerWithRouter />
          <div className="user-profile">
            <FontAwesomeIcon id="user-pic" icon={['far', 'user']} size="7x" />
            <div className="user-details">
              <div className="username">
                <h2>{this.props.currentUser.username}</h2>
                <Link to={`/users/${this.props.currentUser.id}/edit`}>
                  <button id="edit-button">Edit Profile</button>
                </Link>                
                <FontAwesomeIcon id="gear" icon={['fas', 'cog']} size="2x" onClick={this.openNav}/>
                <div id="editNav" className="overlay">                  
                  <div className="overlay-content">                  
                    <Link to={`/users/${this.props.currentUser.id}/editPw`}>Change Password</Link>                    
                    <a onClick={this.logout}>Log Out</a>                    
                    <a onClick={this.closeNav}>Cancel</a>                    
                  </div>
                </div>
              </div>              
              <div>
                <span><b>15</b> posts</span>
                <span><b>{this.followersNum()}</b> followers</span>                
                <span><b>{this.props.currentUser.followedUserIds.length}</b> following</span>
              </div>
              <div>
                <p>{this.props.currentUser.website}</p>
                <p>{this.props.currentUser.bio}</p>
              </div>
            </div>            
          </div>
          <div className="user-main-content">
            <p>User_main_content</p>
          </div>          
        </div>
      );
    } else {
      return (
        <div className="user-profile-page">
          <NavBarContainerWithRouter />
          <div className="user-profile">
            <FontAwesomeIcon id="user-pic" icon={['far', 'user']} size="7x" />
            <div className="user-details">
              <div className="username">
                <h2>{this.props.user.username}</h2>
                <FollowContainer user={this.props.user} currentUser={this.props.currentUser} />
              </div>
              <div>
                <span><b>15</b> posts</span>
                <span><b>{this.followersNum()}</b> followers</span>
                <span><b>{this.followingNum()}</b> following</span>
              </div>
              <div>
                <p>{this.props.user.website}</p>
                <p>{this.props.user.bio}</p>
              </div>
            </div>
          </div>
          <div className="user-main-content">
            <p>User_main_content</p>
          </div>
        </div>
      );
    }
  }

}

export default UserProfile;