import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.currentUser) {
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
              <Link to="/">
                <FontAwesomeIcon icon={['far', 'compass']} size="lg" />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={['far', 'heart']} size="lg" />    
              </Link>                
              <Link to={`/users/${this.props.currentUser.id}`}>
                <FontAwesomeIcon icon={['far', 'user']} size="lg" />
              </Link>
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