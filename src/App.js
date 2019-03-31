import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {getAllMedia} from './utils/MediaAPI';
import Nav from './components/Nav';
import Home from './views/Home';
import Single from './views/Single';
import Profile from './views/Profile';

class App extends Component {

  state = {
    picArray: [],
  };

  componentDidMount() {
    getAllMedia().then(res => this.setState({picArray: res}));
  }

  render() {
    return (
        <Router basename="/~kimbj/4_periodi/route">
          <div className="container">
            <Nav/>
            <Route exact path="/" render={(props) => (
                <Home {...props} picArray={this.state.picArray} />
            )}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/single/:id" component={Single}/>
          </div>


        </Router>
    );
  }
}

export default App;
