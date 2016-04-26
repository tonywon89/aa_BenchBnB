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
        alert("Login successful");
        ServerActions.receiveCurrentUser(currentUser);
      },
      error: function (errors) {
        ServerActions.receiveErrors(errors);
      }
    });
  },

  logout: function () {
    $.ajax({
      type: "DELETE",
      url: "api/session",
      success: function (currentUser) {
        alert("LogOut Successful!")
        ServerActions.removeCurrentUser();
      },
      error: function (errors) {
        alert("Logout Failed");
        ServerActions.receiveErrors(errors);
      }
    });
  },

  create: function (user) {
    $.ajax({
      type: "POST",
      url: "api/user",
      data: { user: user },
      success: function (createdUser) {
        alert("User created!");
      },
      error: function (errors) {
        alert("User not created");
      }
    });
  },

  destroy: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/user",
      data: { id: id },
      success: function (deletedUser) {
        alert("User deleted!");
      },
      error: function (errors) {
        alert("User not deleted");
      }
    });
  }
};

module.exports = UserApiUtil;
