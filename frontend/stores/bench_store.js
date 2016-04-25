var dispatcher = require("../dispatcher/dispatcher");
var Store = require("flux/utils").Store;
var BenchConstants = require("../constants/bench_constants");

var _benches = {};

var BenchStore = new Store(dispatcher);

BenchStore.all = function () {
  return Object.assign({}, _benches);
}

var resetBenches = function (benches) {
  _benches = {};

  benches.forEach(function(bench) {
    _benches[bench.id] = bench;
  });

  BenchStore.__emitChange();
}

BenchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      break;
  }
};

module.exports = BenchStore;
