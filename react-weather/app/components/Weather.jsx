var React = require('react'),

    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),

    Weather = React.createClass({
      render: function() {
        return(
          <div>
            <h3>Get Weather</h3>
            <WeatherForm />
            <WeatherMessage />
          </div>
        );
      }
    });

module.exports = Weather;
