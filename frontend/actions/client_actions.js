var ApiUtil = require("../util/api_util");

var ClientActions = {
  fetchAllBenches: function () {
    ApiUtil.fetchAllBenches();
  }
};

module.exports = ClientActions;
