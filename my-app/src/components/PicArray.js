import React, { Component } from 'react';

class PicArray extends Component {
  render() {
    return this.props.picArray.map((ar, i) =>(
        <tr key={i}>
          <td>
            <img src={ar.thumbnails.w160} alt="Title"></img>
          </td>
          <td>
            <h3>{ar.title}</h3>
            <p>{ar.description}.</p>
          </td>
          <td>
            <a href={ar.filename}>View</a>
          </td>
        </tr>
    ));
  }
}



export default PicArray;