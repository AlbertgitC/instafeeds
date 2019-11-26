import React from 'react';
import { searchUsers } from '../../actions/users_actions';
import { Link } from 'react-router-dom';
import UserThumbContainer from '../user_thumbnail/user_thumbnail_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key_word: "",
      users: [],
      errors: []
    };

    this.closeList = this.closeList.bind(this);
  }

  search(e) {
    if (e.currentTarget.value !== "") {
      this.setState(
        { key_word: e.currentTarget.value },
        () => {
          searchUsers({ filter: { key_word: this.state.key_word } })
            .then(
              res => {
                const users = [];
                Object.values(res).forEach(user => {
                  users.push(user);
                });
                this.setState({ users: users, errors: [] });
              },
              errors => {
                this.setState({ errors: errors.responseJSON, users: [] })
              }
            );
        }
      );
    } else {
      this.setState({ key_word: "", users: [], errors: [] });
    }
  }

  closeList() {
    this.setState({ key_word: "", users: [], errors: [] });
  }

  userList() {
    if (this.state.users.length === 0) {
      return null;
    }

    return (
      <div className="search-overlay" onClick={this.closeList}>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>
                <UserThumbContainer user={user} />
                <div>{user.username}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderErrors() {
    if (this.state.errors.length === 0) {
      return null;
    }

    return (
      <div className="search-overlay" onClick={this.closeList}>
        <ul>
          {this.state.errors.map((error, i) => (
            <li key={i}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }


  render() {
    return (
      <div className="search-main">
        <input type="text"
          onChange={e => this.search(e)}
          placeholder="&#128269; Search User"
          value={this.state.key_word}
        />
        {this.renderErrors()}
        {this.userList()}
      </div>
    );
  }
}

export default Search;