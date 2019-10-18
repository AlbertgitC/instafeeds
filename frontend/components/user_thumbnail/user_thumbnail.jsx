import React from 'react';



class UserThumb extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    if (this.props.user.thumbnailUrl) {
      return <img src={this.props.user.thumbnailUrl} className="user-thumb" id={this.props.id} />;
    } else {
      return <img src={window.brentURL} className="user-thumb" id={this.props.id} />;
    }
  }

}

export default UserThumb;