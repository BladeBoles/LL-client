import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing';


class App extends Component {
  render() {
    return (
    <main className='App'>
      <Landing />
    </main>
  );
  }
}

export default App;