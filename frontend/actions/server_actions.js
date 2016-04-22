var dispatcher = require("../dispatcher/dispatcher");
var BenchConstants = require("../constants/bench_constants");

var ServerActions = {
  receiveAllBenches: function (benches) {
    dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = ServerActions;
