var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {},
        message = this.refs.message.value,
        name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onUpdates(updates);
  },
  render: function() {
    return(
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" placeholder="Enter Name"/>
          <br/>
          <textarea ref="message" placeholder="Enter Message"/>
          <br/>
          <button>Submit</button>
        </form>
    );
  }
});
 module.exports =  GreeterForm;
