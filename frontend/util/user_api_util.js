var ServerActions = require("../actions/server_actions");

var UserApiUtil = {
  fetchCurrentUser: function () {
    $.ajax({
      type: "GET",
      url: "api/user",
      success: function (currentUser) {
        ServerActions.receiveCurrentUser(currentUser);
      },
      error: function (errors) {
        ServerActions.receiveErrors(errors);
      }
    });
  },

  login: function (user) {
    $.ajax({
      type: "POST",
      url: "api/session",
      data: { user: user },
      success: function (currentUser) {
        alert("Login was successful!");
      },
      error: function (errors) {
        alert("Login Failed");
      }
    });
  },

  logout: function (user) {

  },

  create: function (user) {

  },

  destroy: function (user) {

  }
};

module.exports = UserApiUtil;
