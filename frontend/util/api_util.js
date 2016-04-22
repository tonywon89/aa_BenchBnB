var ServerActions = require('../actions/server_actions');

var ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url: "api/benches",
      type: "GET",
      data: { bounds: bounds },
      success: function(benches) {
        ServerActions.receiveBenches(benches);
      }
    })
  }
};

module.exports = ApiUtil;
