var dispatcher = require("../dispatcher/dispatcher");
var Store = require("flux/utils").Store;

var ErrorConstants = require("../constants/error_constants");
var UserConstants = require("../constants/user_constants");

var _currentUser = undefined;
var _authErrors = [];

var UserStore = new Store(dispatcher);

var resetErrors = function (errors) {
  alert("resetErrors!");
  _authErrors = errors;
  UserStore.__emitChange();
};

var resetCurrentUser = function (currentUser) {
  alert("resetCurrentUser!!!");
  _currentUser = currentUser;
  UserStore.__emitChange();
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.ERRORS_RECEIVED:
      resetErrors(payload.errors);
      break;
    case UserConstants.CURRENT_USER_RECEIVED:
      resetCurrentUser(payload.currentUser);
      break;
  }
};

module.exports = UserStore;
