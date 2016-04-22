var React = require("react");
var BenchStore = require("../stores/bench_store");
var ClientActions = require("../actions/client_actions");
var Map = require("./map");

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    this.listener = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function () {
    var benches = [];

    if (this.state.benches) {
      var storedBenches = this.state.benches;
      Object.keys(storedBenches).forEach(function(id) {
        benches.push(storedBenches[parseInt(id)]);
      });
    }

    benches = benches.map(function(bench) {
      return <li key={bench.id}>{bench.description}</li>;
    });

    return (
      <ul>
        {benches}
      </ul>
    );
  }
});

module.exports = Index;
