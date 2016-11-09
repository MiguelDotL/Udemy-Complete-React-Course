var React = require('react'),

    WeatherMessage = React.createClass({

      render: function() {
        let {temp, location} = this.props;

        return(
        <p>It is {temp} in {location}.</p>
        );
      }
    });

module.exports = WeatherMessage;
