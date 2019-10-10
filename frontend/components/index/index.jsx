import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SideBarContainer from '../side_bar/side_bar_container';

class Index extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <div className="index-bg">
        <div className="index-main">
          <NavBarContainer />
          <SideBarContainer />
        </div>
      </div>      
    );
  }
  
}

export default Index;