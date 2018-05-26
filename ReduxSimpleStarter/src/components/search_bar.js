import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// ES6 Class Component

class SearchBar extends Component{
  render() {
    return <input onChange = {this.onInputChange}/>;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
