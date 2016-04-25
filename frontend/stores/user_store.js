var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");

var _currentUser = undefined;
var _authErrors = [];

var UserStore = new Store(AppDispatcher);

module.exports = UserStore;
