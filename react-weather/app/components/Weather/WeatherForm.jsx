var React = require('react'),

    WeatherForm = React.createClass({
      render: function() {
        return(
          <form>
            <input type="text" placeholder="Enter City Name" />
            <br/>
            <button  type="submit" >Get Weather</button>
            <br/>
          </form>
        );
      }
    });

module.exports = WeatherForm;
