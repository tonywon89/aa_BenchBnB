var React = require('react');
var ReactDOM = require('react-dom');
// BenchStore = require('./stores/bench_store');
// ApiUtil = require('./util/api_util');
var Index = require("./components/index");

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Index />, document.getElementById("root"));
});
