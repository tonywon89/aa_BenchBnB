var UserStore = require("../stores/user_store");
var UserActions = require("../actions/user_actions");

var CurrentUserStateMixin = {
  getInitialState: function () {

    return {
      currentUser: UserStore.currentUser(),
      errors: UserStore.errors()
    };
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.updateUser);
    UserActions.fetchCurrentUser();
  },

  updateUser: function () {
    this.setState({ currentUser: UserStore.currentUser() });
  }
};

module.exports = CurrentUserStateMixin;
