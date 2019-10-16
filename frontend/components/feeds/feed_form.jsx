import React from 'react';

class FeedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      body: "",
      user_ids: []
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      user_ids: this.props.followingIds
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const feed = Object.assign({}, this.state);
    this.props.createFeed(feed).then(
      () => { 
        this.closeForm();
        this.props.rerenderFeeds();
      }
    );
    
  }

  closeForm() {
    document.getElementById("feedForm").style.display = "none";
  }

  renderErrors() {
    return (
      <ul id="errors">
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="feed-form">
        <form onSubmit={this.handleSubmit}>
          <h1>Instafeeds</h1>
          <br />
          {this.renderErrors()}
          <div className="input-field">
            <span>upload file placeholder</span>
            <input type="text"
              onChange={this.update("body")}
              placeholder="Write a caption..."
            />            
            <button>Share</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FeedForm;