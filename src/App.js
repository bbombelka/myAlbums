import React, { Component } from 'react';
import Header from './components/Header';
import AddAlbum from './components/AddAlbum';
import Albums from './components/Albums';
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Provider from './components/Context';
import EditAlbum from './components/EditAlbum';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Albums} />
              <Route path="/AddAlbum" component={AddAlbum} />
              <Route path="/EditAlbum/album/:id" component={EditAlbum} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
