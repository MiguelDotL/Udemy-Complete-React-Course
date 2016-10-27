var React = require('react'),
    GreeterMessage = require('GreeterMessage'),
    GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'World',
      message: 'This is the default message!'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleUpdates: function(updates) {
    this.setState(updates);
  },
  render: function() {
    var name = this.state.name,
        message =  this.state.message;
    return(
        <div>
          <GreeterMessage name={name} message={message}/>
          <GreeterForm onUpdates={this.handleUpdates} />
        </div>
    );
  }
});

module.exports = Greeter;
