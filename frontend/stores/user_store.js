var dispatcher = require("../dispatcher/dispatcher");
var Store = require("flux/utils").Store;

var ErrorConstants = require("../constants/error_constants");
var UserConstants = require("../constants/user_constants");

var _currentUser = undefined;
var _authErrors = [];

var UserStore = new Store(dispatcher);

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.ERRORS_RECEIVED:
      alert("UserStore errors!");
      break;
    case UserConstants.CURRENT_USER_RECEIVED:
      alert("UserStore Current User");
      break;
  }
};

module.exports = UserStore;
