import React from 'react';

class FeedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile: null,
      body: "",
      user_ids: []
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    if (this.props.followingIds) {
      this.setState({
        user_ids: this.props.followingIds
      });
    }
    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  handleSubmit(e) {
    e.preventDefault();
    const feedData = new FormData();
    
    feedData.append("feed[photo]", this.state.photoFile);
    feedData.append("feed[body]", this.state.body);
    
    for (let i = 0; i < this.state.user_ids.length; i++) {
      feedData.append("feed[user_ids][]", this.state.user_ids[i]);
    }
    
    this.props.createFeed(feedData).then(
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
          <div className="feedForm-input-field">
            <div>Post a Feed!</div>
            {this.renderErrors()}
            <input type="file"
              onChange={this.handleFile}
              id="feed-file"
            />
            <label htmlFor="feed-file">Choose a file</label>
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