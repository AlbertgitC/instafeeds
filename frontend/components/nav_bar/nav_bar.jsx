import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FeedFormContainer from '../feeds/feed_form_container';


class NavBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};

  }

  rerenderFeeds() {}

  openForm() {
    document.getElementById("feedForm").style.display = "flex";    
  }

  closeForm() {
    document.getElementById("feedForm").style.display = "none";    
  }

  render() {
    if (this.props.currentUser && this.props.location.pathname === "/") {
      
      return (
        <div className="nav-bar-bg">
          <div className="nav-bar">
            <Link to="/">
              <div className="logo">
                <span>
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                </span>              
                <h1>Instafeeds</h1>
              </div>
            </Link>                    
            <input type="text" placeholder="&#128269; Search"/>
            <div className="nav-menu">
              <a onClick={this.openForm}>
                <FontAwesomeIcon icon={['far', 'plus-square']} size="lg" />
              </a>            
              <Link to="/">
                <FontAwesomeIcon icon={['far', 'compass']} size="lg" />
              </Link>
              {/* <Link to="/">
                <FontAwesomeIcon icon={['far', 'heart']} size="lg" />    
              </Link>                 */}
              <Link to={`/users/${this.props.currentUser.id}`}>
                <FontAwesomeIcon icon={['far', 'user']} size="lg" />
              </Link>
            </div>          
          </div>
        </div>        
      );
    } else if (this.props.currentUser && this.props.location.pathname !== "/") {
      return (
        <div className="nav-bar-bg">
          <div className="nav-bar">
            <Link to="/">
              <div className="logo">
                <span>
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                </span>
                <h1>Instafeeds</h1>
              </div>
            </Link>
            <input type="text" placeholder="&#128269; Search" />
            <div className="nav-menu">
              <a onClick={this.openForm}>
                <FontAwesomeIcon icon={['far', 'plus-square']} size="lg" />
              </a>
              <Link to="/">
                <FontAwesomeIcon icon={['far', 'compass']} size="lg" />
              </Link>
              {/* <Link to="/">
                <FontAwesomeIcon icon={['far', 'heart']} size="lg" />
              </Link> */}
              <Link to={`/users/${this.props.currentUser.id}`}>
                <FontAwesomeIcon icon={['far', 'user']} size="lg" />
              </Link>
            </div>
          </div>
          <div id="feedForm" className="overlay">
            <div className="feedForm-overlay-content">
              <FeedFormContainer rerenderFeeds={this.rerenderFeeds}/>
              <button onClick={this.closeForm}>Cancel</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-bar-bg">
          <div className="nav-bar">
            <Link to="/">
              <div className="logo">
                <span>
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                </span>
                <h1>Instafeeds</h1>
              </div>
            </Link>
            <input type="text" placeholder="&#128269; Search" />  
            <div className="nav-button">
              <Link to="/login">
                <button>Log In</button> 
              </Link>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </div>          
          </div>
        </div>        
      );
    }
  }    
}

export default NavBar;