import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getSingleMedia} from '../utils/MediaAPI';



class Single extends Component {
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  state = {
    file: [],
  };

  componentDidMount() {
    let  id  = JSON.stringify(this.props.match.params.id);
    id = id.replace('"','');
    id = id.replace('"','');
    console.log(id);
    getSingleMedia( id ).then(res => this.setState({file: res}));
  }

  render() {
    return (
        <React.Fragment>
          <h1>{this.state.file.title}</h1>
          <img src={this.mediaUrl + this.state.file.filename}
               alt={this.state.file.title}/>
        </React.Fragment>
    );
  }
}

Single.propTypes = {
  match: PropTypes.object,
};

export default Single;