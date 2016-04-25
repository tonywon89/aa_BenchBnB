var React = require('react');

var BenchForm = React.createClass({
  render: function () {
    return (
      <form>
        <label> Description
          <input type="text"/>
        </label>

        <label> Number of seats
              <input type="number"/>
        </label>

        <label> Latitude
          <input type="number"/>
        </label>

        <label> Longitude
          <input type="number"/>
        </label>
      </form>
    );
  }
});

module.exports = BenchForm;
