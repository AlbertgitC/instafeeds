import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { withRouter } from "react-router";
import UserThumbContainer from '../user_thumbnail/user_thumbnail_container';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: this.props.currentUser.id,
        username: "",
        email: "",
        website: "",
        bio: ""
      },
      formType: "editInfo"
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      user: {
        id: this.props.currentUser.id,
        username: this.props.currentUser.username,
        email: this.props.currentUser.email,
        website: this.props.currentUser.website || "",
        bio: this.props.currentUser.bio || ""
      }
    });

    this.props.clearErrors();
  }

  update(field) {
    return e => {
      const user = JSON.parse(JSON.stringify(this.state.user));
      user[field] = e.currentTarget.value;
      this.setState({user: user});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const userData = new FormData();

    userData.append("user[formType]", "editInfo");
    userData.append("user[user][id]", this.state.user.id);
    userData.append("user[user][username]", this.state.user.username);
    userData.append("user[user][email]", this.state.user.email);
    userData.append("user[user][website]", this.state.user.website);
    userData.append("user[user][bio]", this.state.user.bio);

    
    this.props.editUser(userData).then(
      () => this.props.history.push(`/users/${this.props.currentUser.id}`)
    );
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
    const NavBarContainerWithRouter = withRouter(NavBarContainer);
    
    if (this.props.currentUser.id !== 99) {
      return (
        <div>
          <NavBarContainerWithRouter />
          <div className="edit-form">

            <div className="edit-profile-side">
              <ul>
                <li>
                  <span>Edit Profile</span>
                </li>              
                <Link to={`/users/${this.props.currentUser.id}/editPw`}>
                  <li>
                    <span>Change Password</span>
                  </li>                   
                </Link>              
              </ul>
            </div>
            <div className="edit-main">
              <div className="edit-profile" id="editAll">
                <div>
                  <UserThumbContainer id="edit-thumb" user={this.props.currentUser} />
                  <h1>{this.props.currentUser.username}</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div>Username
                    <input type="text" value={this.state.user.username} onChange={this.update('username')}/>
                  </div>
                  <div>Website
                    <input type="text" value={this.state.user.website} onChange={this.update('website')}/>
                  </div>
                  <div>
                    <span>Bio</span>
                    <textarea value={this.state.user.bio} onChange={this.update('bio')}></textarea>
                  </div>
                  <div>Email
                    <input type="text" value={this.state.user.email} onChange={this.update('email')}/>
                  </div>
                  <button>Submit</button>
                </form>              
              </div>
              {this.renderErrors()}
            </div>
          </div>
        </div>   
      );
    } else {
      return (
        <div>
          <NavBarContainerWithRouter />
          <div className="edit-form">

            <div className="edit-profile-side">
              <ul>
                <li>
                  <span>Edit Profile</span>
                </li>
                <Link to={`/users/${this.props.currentUser.id}/editPw`}>
                  <li>
                    <span>Change Password</span>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="edit-main">
              <div className="edit-profile" id="editAll">
                <div>
                  <UserThumbContainer id="edit-thumb" user={this.props.currentUser} />
                  <h1>{this.props.currentUser.username}</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div>Username
                    <input type="text" value={this.state.user.username} onChange={this.update('username')} />
                  </div>
                  <div>Website
                    <input type="text" value={this.state.user.website} onChange={this.update('website')} />
                  </div>
                  <div>
                    <span>Bio</span>
                    <textarea value={this.state.user.bio} onChange={this.update('bio')}></textarea>
                  </div>
                  <div>Email
                    <input type="text" value={this.state.user.email} onChange={this.update('email')} />
                  </div>
                  <button>Submit</button>
                </form>
              </div>
              {this.renderErrors()}
              <div id="block-edit" className="overlay">
                <div className="block-edit-content">
                  <div>Sorry Demo Account Can't Edit</div>
                  <Link to={`/users/${this.props.currentUser.id}`}>Go Back</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UserEditForm;