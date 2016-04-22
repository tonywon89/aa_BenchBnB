var ServerActions = require('../actions/server_actions');

var ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      url: "api/benches",
      type: "GET",
      success: function(benches) {
        ServerActions.receiveBenches(benches);
      }
    })
  }
};

module.exports = ApiUtil;
