var React = require("react");
var BenchStore = require("../stores/bench_store");
var ClientActions = require("../actions/client_actions");

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    this.listener = BenchStore.addListener(this._onChange);
    ClientActions.fetchAllBenches();
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function () {
    return (
      <div>This works</div>
    );
  }
});

module.exports = Index;
