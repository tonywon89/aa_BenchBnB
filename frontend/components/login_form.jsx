var React = require("react");
var CurrentUserStateMixin = require("../mixins/current_user_state_mixin");
var UserActions = require("../actions/user_actions");

var LoginForm = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function () {
    return { username: "", password: "" };
  },

  usernameChange: function (event) {
    this.setState({ username: event.target.value });
  },

  passwordChange: function (event) {
    this.setState({ password: event.target.value });
  },

  handleLoginSubmit: function (event) {
    event.preventDefault();

    var user = {
      username: this.state.username,
      password: this.state.password
    };

    UserActions.login(user);
  },

  logout: function () {
    UserActions.logout();
  },

  render: function () {
    var renderedContent;
    if (this.state.currentUser) {
      renderedContent = (
        <div>
          <p>{this.state.currentUser.username}</p>
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    } else {
      renderedContent = (
        <form onSubmit={this.handleLoginSubmit}>
          <input type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.usernameChange} />

          <input type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.passwordChange} />

          <input type="submit" value="Log In" />
        </form>
      );
    }

    return (
      <div>
        {renderedContent}
      </div>
    );
  }
});

module.exports = LoginForm;
