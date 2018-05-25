//importing React
import React from 'react';
import ReactDOM from 'react-dom';

// Writing a component
// Through this component, we want it produce some HTML code on screen

//plain JS function that returns JSX --> JSX is JS that looks like HTML
const App = function () {
  return <div> Hello </div>;
}

// To show a component on screen, we want to tell react to put it on the page in DOM
ReactDOM.render(App);
