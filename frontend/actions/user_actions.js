var UserApiUtil = require("../util/user_api_util");

var UserActions = {
  fetchCurrentUser: function () {
    UserApiUtil.fetchCurrentUser();
  },

  login: function (user) {
    UserApiUtil.login(user);
  },

  logout: function (user) {
    UserApiUtil.logout(user);
  },

  create: function (user) {
    UserApiUtil.create(user);
  },

  destroy: function (user) {
    UserApiUtil.destroy(user);
  }
};

module.exports = UserActions;
