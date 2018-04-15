import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import CheckIn from './CheckIn';
import Rooms from './Rooms';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing} />
            <Route path='/checkin' component={CheckIn} />
            <Route path='/rooms' component={Rooms} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
