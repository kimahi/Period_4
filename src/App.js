import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {getAllMedia} from './utils/MediaAPI';
import Nav from './components/Nav';
import Home from './views/Home';
import Single from './views/Single';
import Profile from './views/Profile';
import Login from './views/Login';
import PropTypes from 'prop-types';


class App extends Component {

  state = {
    picArray: [],
    user: [],
  };

  componentDidMount() {
    getAllMedia().then(res => this.setState({picArray: res}));
  }

  render() {
    return (
        <Router basename="/~kimbj/4_periodi/login">
          <div className="container">
            <Nav/>
            <Route exact path="/" component={Login}/>
            <Route path="/home" render={(props) => (
                <Home {...props} picArray={this.state.picArray} />
            )}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/single/:id" component={Single}/>
          </div>
        </Router>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
};

export default App;
