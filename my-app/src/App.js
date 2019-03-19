import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    picArray: [
      {
        'title': 'Title 1',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
        'thumbnails': {
          w160: 'http://placekitten.com/160/161'
        },
        'filename': 'http://placekitten.com/2048/1920',
      },
      {
        'title': 'Title 2',
        'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
        'thumbnails': {
          w160: 'http://placekitten.com/160/162'
        },
        'filename': 'http://placekitten.com/2041/1922',
      },
      {
        'title': 'Title 3',
        'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
        'thumbnails': {
          w160: 'http://placekitten.com/160/163'
        },
        'filename': 'http://placekitten.com/2039/1920',
      },
    ]
  };





  render() {
    console.log(this.state.picArray[0].thumbnails.w160);
    return (
      <div className="App">
        <table>
          <tbody>
          <tr>
            <td>
              <img src={this.state.picArray[0].thumbnails.w160} alt="Title"></img>
            </td>
            <td>
              <h3>{this.state.picArray[0].title}</h3>
              <p>{this.state.picArray[0].description}.</p>
            </td>
            <td>
              <a href="#">View</a>
            </td>
          </tr>
          <tr>
            <td>
              <img src={this.state.picArray[1].thumbnails.w160} alt="Title"></img>
            </td>
            <td>
              <h3>{this.state.picArray[1].title}</h3>
              <p>{this.state.picArray[1].description}</p>
            </td>
            <td>
              <a href="#">View</a>
            </td>
          </tr>
          <tr>
            <td>
              <img src={this.state.picArray[2].thumbnails.w160} alt="Title"></img>
            </td>
            <td>
              <h3>{this.state.picArray[2].title}</h3>
              <p>{this.state.picArray[2].description}</p>
            </td>
            <td>
              <a href="#">View</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }

}

export default App;
