import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import CurrentlyReading from '../CurrentlyReading/CurrentlyReading';
///Footer/Footer';
import Landing from '../Landing/Landing';
import MyLibrary from '../MyLibrary/MyLibrary';
import Navbar from '../Navbar/Navbar';
import NewEntry from '../NewEntry/NewEntry';




class App extends Component {

  
  render() {
    return (
    <>
      <Navbar />
      
      <Switch>
    
        <Route path="/currently-reading" component={CurrentlyReading} />

        <Route path="/my-library" component={MyLibrary} />

        <Route path="/new-entry" component={NewEntry} />

        <Route exact path="/" component={Landing} />
  
      </Switch>
    </>
  );
  }
}

export default App;