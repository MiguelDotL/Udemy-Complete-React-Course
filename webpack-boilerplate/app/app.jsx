var React = require('react'),
    ReactDOM = require('react-dom'),
    objOne = {
      name: 'Miguel',
      location: 'Louderdale'
    },
    objTwo = {
      age: 27,
      ...objOne
    };

  console.log(objTwo);

ReactDOM.render(
  <h1>ES5 React Boilerplate</h1>,
  document.getElementById('app')
);
