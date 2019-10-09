import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    
  }

  logout() {
    this.props.logout().then(
      this.props.history.push('/login')
    );
  }

  toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
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
                <div className="user-dropdown">
                  <button className="dropbtn" onClick={this.toggleDropdown}>Edit Profile</button>
                  <div id="myDropdown" className="dropdown-content">
                    <li>
                      <Link to={`/users/${this.props.currentUser.id}`}>Change Password</Link>
                    </li>
                    <li>
                      <a onClick={this.logout}>Log Out</a>
                    </li> 
                    <li>
                      <a>Cancel</a>
                    </li>                    
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

export default Index;