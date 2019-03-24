import React, { Component } from 'react';
import PicArray from './components/PicArray'

import './App.css';

class App extends Component {

  state = {
    picArray: []
  };

  componentDidMount() {
    fetch("./test.json").then((response) => {
      return response.json()
    }).then(data => {
      console.log(data);
      this.setState({ picArray: data });
    })
  }

  render() {
    return (
        <div className="App">
          <table>
            <tbody>
            <PicArray picArray={this.state.picArray}/>
            </tbody>
          </table>
        </div>
    );
  }
}


export default App;