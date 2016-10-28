// import React, { Component } from 'react';
//
// export default class Main extends Component {
//
// }

var React = require('react'),

    Nav = require('Nav'),
    Weather = require('Weather'),

    Main = React.createClass({
      render: function() {
        return(
          <div>
            <Nav />
            <h2>Main Component</h2>
          </div>
        );
      }
    });

module.exports = Main;
