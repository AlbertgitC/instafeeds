import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class UserProfile extends React.Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout().then(
      this.props.history.push('/login')
    );
  }


  openNav() {
    document.getElementById("editNav").style.display = "block";
  }

  closeNav() {
    document.getElementById("editNav").style.display = "none";
  }
  

  render() {
  
    if (this.props.currentUser) {
      return (
        <div className="user-profile-page">
          <NavBarContainer />
          <div className="user-profile">
            <FontAwesomeIcon id="user-pic" icon={['far', 'user']} size="7x" />
            <div className="user-details">
              <div className="username">
                <h2>{this.props.currentUser.username}</h2>
                <button onClick={this.openNav}>Edit Profile</button>
                <div id="editNav" className="overlay">                  
                  <div className="overlay-content">                  
                    <Link to={`/users/${this.props.currentUser.id}/edit`}>Change Password</Link>                    
                    <a onClick={this.logout}>Log Out</a>                    
                    <a onClick={this.closeNav}>Cancel</a>                    
                  </div>
                </div>
              </div>              
              <div>
                <span><b>15</b> posts</span>
                <span><b>53</b> followers</span>
                <span><b>35</b> following</span>
              </div>
              <div>
                <a>www.personalwebsite.com</a>
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
          <NavBarContainer />
          <div className="user-profile">
            <FontAwesomeIcon id="user-pic" icon={['far', 'user']} size="7x" />
            <div className="user-details">
              <div className="username">
                <h2>targeted_user_username</h2>
              </div>
              <div>
                <span><b>15</b> posts</span>
                <span><b>53</b> followers</span>
                <span><b>35</b> following</span>
              </div>
              <div>
                <a>www.personalwebsite.com</a>
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