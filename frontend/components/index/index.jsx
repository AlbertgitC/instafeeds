import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SideBarContainer from '../side_bar/side_bar_container';
import FeedsContainer from '../feeds/feeds_container';
import { withRouter } from "react-router";

class Index extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    
    const NavBarContainerWithRouter = withRouter(NavBarContainer);

    return (
      <div>
        <NavBarContainerWithRouter />
        <div className="index-main">
          <FeedsContainer />          
          <SideBarContainer />          
        </div>
      </div>      
    );
  }
  
}

export default Index;