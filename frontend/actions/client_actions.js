var ApiUtil = require("../util/api_util");

var ClientActions = {
  fetchBenches: function (bounds) {
    ApiUtil.fetchBenches(bounds);
  },

  createBench: function (benchData) {
    ApiUtil.createBench(benchData);
  },
};

module.exports = ClientActions;
