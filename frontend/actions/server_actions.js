var dispatcher = require("../dispatcher/dispatcher");
var BenchConstants = require("../constants/bench_constants");
var ErrorConstants = require("../constants/error_constants");
var UserConstants = require("../constants/user_constants");

var ServerActions = {
  receiveBenches: function (benches) {
    dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveErrors: function (errors) {
    dispatcher.dispatch({
      actionType: ErrorConstants.ERRORS_RECEIVED,
      errors: errors
    });
  },

  receiveCurrentUser: function (currentUser) {
    dispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  }
};

module.exports = ServerActions;
