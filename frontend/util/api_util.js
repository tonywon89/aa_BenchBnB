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
    });
  },

  createBench: function (benchData) {
    $.ajax({
      type: "POST",
      url: "api/benches",
      data: { bench: benchData },
      success: function (bench) {
        alert("The Bench Saved!");
      }
    });
  }
};

module.exports = ApiUtil;
