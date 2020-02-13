import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import CurrentlyReading from '../CurrentlyReading/CurrentlyReading';
///Footer/Footer';
import Landing from '../Landing/Landing';
import MyLibrary from '../MyLibrary/MyLibrary';
import Navbar from '../Navbar/Navbar';
import NewEntry from '../NewEntry/NewEntry';
import UserContext from '../context/UserContext';



class App extends Component {
  static contextType = UserContext;

  state ={
    user_login: this.context.user_login
  }

  handleSetLogin = (user_login) => {
    this.setState({
      user_login
    })
  }

  render() {

    const contextLogin = {
      user_login: this.state.user_login
    }

    return (
    
    <>
    <UserContext.Provider value={{ contextLogin }}>
      <Navbar onSetLogin={this.handleSetLogin} />
    
      <Switch>
    
        <Route path="/currently-reading" component={CurrentlyReading} />

        <Route path="/my-library" component={MyLibrary} />

        <Route path="/new-entry" component={NewEntry} />

        <Route exact path="/" component={Landing} />
  
      </Switch>
      </UserContext.Provider>
    </>
  );
  }
}

export default App;