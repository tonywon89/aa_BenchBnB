var UserApiUtil = require("../util/user_api_util");

var UserActions = {
  fetchCurrentUser: function () {
    UserApiUtil.fetchCurrentUser();
  },

  login: function (user) {
    UserApiUtil.login(user);
  },

  logout: function () {
    UserApiUtil.logout();
  },

  create: function (user) {
    UserApiUtil.create(user);
  },

  destroy: function (user) {
    UserApiUtil.destroy(user);
  }
};

module.exports = UserActions;
