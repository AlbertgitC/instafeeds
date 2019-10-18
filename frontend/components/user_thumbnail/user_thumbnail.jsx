import React from 'react';
import { Link } from 'react-router-dom';



class UserThumb extends React.Component {

  constructor(props) {
    super(props)

  }


  render() {
    return (
      
      <img src={window.brentURL} className="user-thumb" id={this.props.id}/>
      
    );
  }

}

export default UserThumb;