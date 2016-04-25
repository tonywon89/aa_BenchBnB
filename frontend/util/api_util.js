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
        
      }
    });
  },

  fetchCurrentUser: function () {
    console.log("We are in APIUtil fetch current user");
    $.ajax({
      type: "GET",
      url: "api/user",
      success: function (currentUser) {
        ServerActions.receiveCurrentUser(currentUser);
      },

      error: function (errors) {
        ServerActions.receiveErrors(errors);
      }
    });
  }
};

module.exports = ApiUtil;
