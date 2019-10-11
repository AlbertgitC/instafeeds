import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      password: "",
      new_password: "",
      email: "",
      website: "",
      bio: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      website: this.props.currentUser.website || "",
      bio: this.props.currentUser.bio || ""
    })

    this.props.clearErrors();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    
    this.props.editUser(user).then(
      () => this.props.history.push(`/users/${this.props.currentUser.id}`)
    );
  }

  resetPassword() {
    this.setState({password: "", new_password: ""});
  }

  openEdit() {
    document.getElementById("editAll").style.display = "flex";
  }

  closeEdit() {
    document.getElementById("editAll").style.display = "none";
  }

  openEditPw() {
    document.getElementById("editPW").style.display = "flex";
  }

  closeEditPw() {
    document.getElementById("editPW").style.display = "none";
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
      <div>
        <NavBarContainer />
        <div className="edit-form">
        
          <div className="edit-side-menu">
            <ul>
              <li onClick={() => { this.openEdit(); this.closeEditPw(); this.props.clearErrors(); this.resetPassword()}}>
                <span>Edit Profile</span>
              </li>
              <li onClick={() => { this.openEditPw(); this.closeEdit(); this.props.clearErrors()}}>
                <span>Change Password</span>
              </li>
            </ul>
          </div>
          <div className="edit-main">
            <div className="edit-profile" id="editAll">
              <div>
                <div id="editPicHolder">head pic</div>
                <h1>{this.props.currentUser.username}</h1>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div>Username
                  <input type="text" value={this.state.username} onChange={this.update('username')}/>
                </div>
                <div>Website
                  <input type="text" value={this.state.website} onChange={this.update('website')}/>
                </div>
                <div>
                  <span>Bio</span>
                  <textarea value={this.state.bio} onChange={this.update('bio')}></textarea>
                </div>
                <div>Email
                  <input type="text" value={this.state.email} onChange={this.update('email')}/>
                </div>
                <button>Submit</button>
              </form>              
            </div>
            <div id="editPW" className="edit-password">
              <div>
                <div id="editPicHolder">head pic</div> 
                <h1>{this.props.currentUser.username}</h1>
              </div>
              <form onSubmit={this.handleSubmit}>
                <label>Old Password
                  <input type="password"             
                  onChange={this.update('password')}
                />
                </label>                
                <label>New Password
                  <input type="password"              
                  onChange={this.update('new_password')}
                />
                </label>                
                <button>Change Password</button>
              </form>
            </div>
            {this.renderErrors()}
          </div>
          
        </div>
      </div>   
    );
  }
}

export default UserEditForm;