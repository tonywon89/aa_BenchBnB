var React = require("react");
var BenchStore = require("../stores/bench_store");
var ClientActions = require("../actions/client_actions");
var hashHistory = require("react-router").hashHistory;

var Map = React.createClass({

  componentDidMount: function () {
    this.markers = [];

    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.map.addListener('idle', function () {
      var LatLngBounds = this.map.getBounds();

      var northEast = {
        lat: LatLngBounds.getNorthEast().lat(),
        lng: LatLngBounds.getNorthEast().lng()
      };

      var southWest = {
        lat: LatLngBounds.getSouthWest().lat(),
        lng: LatLngBounds.getSouthWest().lng()
      };

      var bounds = {
        northEast: northEast,
        southWest: southWest
      };

      ClientActions.fetchBenches(bounds);
    }.bind(this));

    this.map.addListener('click', this.handleClick);

    this.listener = BenchStore.addListener(this._onChange);
  },



  _onChange: function () {
    this.markers.forEach(function(marker) {
      marker.setMap(null);
    });

    this.markers = [];
    var benches = BenchStore.all();

    for (var id in benches) {
      if (benches.hasOwnProperty(id)) {
        var bench = benches[id];
        var marker = new google.maps.Marker({
          position: {lat: bench.lat, lng: bench.lng },
          map: this.map,
          title: bench.description
        });
        this.markers.push(marker);
      }
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  handleClick: function (event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();

    var coords = { lat: lat, lng: lng };

    hashHistory.push({
      pathname: "benches/new",
      query: coords
    });
  },

  render: function () {
    return (
      <div id="map" ref="map" >
      </div>
    );
  }
});


module.exports = Map;
