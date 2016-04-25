var React = require('react');
var ClientActions = require('../actions/client_actions');
var hashHistory = require("react-router").hashHistory;

var BenchForm = React.createClass({
  getInitialState: function () {
    return {
      //TODO Change default values
      description: "",
      seating: 2,
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng
    };
  },

  changeDescription: function (event) {
    this.setState({description: event.target.value});
  },

  changeSeating: function (event) {
    this.setState({seating: parseInt(event.target.value)});
  },

  changeLat: function (event) {
    this.setState({lat: parseFloat(event.target.value)});
  },

  changeLng: function (event) {
    this.setState({lng: parseFloat(event.target.value)});
  },

  handleSubmit: function () {
    event.preventDefault();
    var benchData = {
      description: this.state.description,
      seating: this.state.seating,
      lat: this.state.lat,
      lng: this.state.lng
    };

    ClientActions.createBench(benchData);

    this.setState({
      description: "",
      seating: 0,
      lat: 0.00,
      lng: 0.00
    });
    hashHistory.push("/");
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Description
          <input type="text"
                 onChange={this.changeDescription}
                 value={this.state.description}/>
        </label>

        <label> Number of seats
          <input type="number"
                 onChange={this.changeSeating}
                 value={this.state.seating}/>
        </label>

        <label> Latitude
          <input type="number"
                 step="any"
                 onChange={this.changeLat}
                 value={this.state.lat}
                 disabled="true"/>
        </label>

        <label> Longitude
          <input type="number"
                 step="any"
                 onChange={this.changeLng}
                 value={this.state.lng}
                 disabled="true"/>
        </label>
        <input type="submit" value="Create Bench" />
      </form>
    );
  }
});

module.exports = BenchForm;
