var React = require('react');
var ClientActions = require('../actions/client_actions');

var BenchForm = React.createClass({
  getInitialState: function () {
    return {
      //TODO Change default values
      description: "",
      seating: 2,
      lat: 0,
      lng: 0
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
                 value={this.state.lat}/>
        </label>

        <label> Longitude
          <input type="number"
                 step="any"
                 onChange={this.changeLng}
                 value={this.state.lng}/>
        </label>
        <input type="submit" value="Create Bench" />
      </form>
    );
  }
});

module.exports = BenchForm;
