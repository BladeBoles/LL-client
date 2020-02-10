import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import CurrentlyReading from '../CurrentlyReading/CurrentlyReading';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import MyLibrary from '../MyLibrary/MyLibrary';
import Navbar from '../Navbar/Navbar';
import NewEntry from '../NewEntry/NewEntry';




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