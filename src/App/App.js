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

  constructor(props) {
    super(props);

    this.fetchProfile = (user_id) => {
      fetch(`http://localhost:8000/api/login/${user_id}`)
      .then(res => res.json())
      .then(response => {
        console.log(`Received response: ${response.id}`)
        this.setState({
          user_login: response.user_login,
          user_id: response.user_id
        })
      })
    }

    this.state = {
      user_login: '',
      user_id: 0,
      fetchProfile: this.fetchProfile,
    }
 };

  render() {

    return (
    
    <>
    <UserContext.Provider value={this.state}>
      <Navbar />
    
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