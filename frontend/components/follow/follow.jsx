import React from 'react';

class Follow extends React.Component {

  constructor(props) {
    super(props)
    this.state = { followed_id: "", follower_id: ""}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    
  }

  update() {
    this.setState({
      followed_id: this.props.user.id,
      follower_id: this.props.currentUser.id
    });  
  }

  handleSubmit(e) {
    e.preventDefault();
    const follow = Object.assign({}, this.state);

    this.props.followUser(follow);
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.update}>Follow</button>
        </form>
      </div>
    );
  }

}

export default Follow;