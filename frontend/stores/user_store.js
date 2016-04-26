var dispatcher = require("../dispatcher/dispatcher");
var Store = require("flux/utils").Store;

var ErrorConstants = require("../constants/error_constants");
var UserConstants = require("../constants/user_constants");

var _currentUser = undefined;
var _authErrors = [];

var UserStore = new Store(dispatcher);

var resetErrors = function (errors) {
  _authErrors = errors;
  UserStore.__emitChange();
};

var resetCurrentUser = function (currentUser) {
  _currentUser = currentUser;
  UserStore.__emitChange();
};

UserStore.currentUser = function () {
  return _currentUser;
};

UserStore.errors = function () {
  return _authErrors.slice();
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.ERRORS_RECEIVED:
      resetErrors(payload.errors);
      break;
    case UserConstants.CURRENT_USER_RECEIVED:
      resetCurrentUser(payload.currentUser);
      break;
    case UserConstants.REMOVE_CURRENT_USER:
      _currentUser = undefined;
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
