var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name,
        message = this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

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
          {/* <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/> */}
        </div>
    );
  }
});

let firstName = 'Miguel';

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);
