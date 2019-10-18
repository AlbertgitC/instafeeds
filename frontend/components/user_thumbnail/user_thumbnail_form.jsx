import React from 'react';
import UserThumbContainer from './user_thumbnail_container';

class ThumbnailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailFile: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    this.setState({ thumbnailFile: e.currentTarget.files[0] })
  }

  handleSubmit(e) { 
    e.preventDefault();
    const userData = new FormData();

    userData.append("user[user][id]", this.props.currentUser.id);
    userData.append("user[user][thumbnail]", this.state.thumbnailFile);
    userData.append("user[formType]", "editInfo");

    
    this.props.editUser(userData).then(
      () => {
        this.closeForm();
        this.props.fetchUser(this.props.currentUser.id);
      }
    );
  }

  closeForm() {
    document.getElementById("thumbnail-form").style.display = "none";
  }


  render() {
    return (
      <div className="thumbnail-form-main">
        <UserThumbContainer id="thumb-form-thumb" user={this.props.currentUser} />
        <form onSubmit={this.handleSubmit}>          
          <div>Change Profile Picture</div>
          <input type="file"
            onChange={this.handleFile}
            id="file"
          />
          <label htmlFor="file">Choose a file</label>
          <button>Submit</button>
        </form>
        <button onClick={this.closeForm}>Cancel</button>
      </div>
    );
  }

}

export default ThumbnailForm;