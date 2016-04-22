var React = require("react");
var BenchStore = require("../stores/bench_store");
var ClientActions = require("../actions/client_actions");

var Map = React.createClass({
  componentDidMount: function () {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', function () {
      ClientActions.fetchAllBenches();
    });

    this.listener = BenchStore.addListener(this._onChange);
  },

  _onChange: function () {
    var benches = BenchStore.all();
    for (var id in benches) {
      if (benches.hasOwnProperty(id)) {
        var bench = benches[id];
         var marker = new google.maps.Marker({
          position: {lat: bench.lat, lng: bench.lng },
          map: this.map,
          title: bench.description
        });
        // marker.setMap(this.map);
      }
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    return (
      <div id="map" ref="map">
      </div>
    );
  }
});

module.exports = Map;
