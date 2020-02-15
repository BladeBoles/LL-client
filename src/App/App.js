import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import CurrentlyReading from '../CurrentlyReading/CurrentlyReading';
///Footer/Footer';
import Landing from '../Landing/Landing';
import MyLibrary from '../MyLibrary/MyLibrary';
import Navbar from '../Navbar/Navbar';
import NewEntry from '../NewEntry/NewEntry';
import UserContext from '../context/UserContext';
import config from '../config'



class App extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.fetchProfile = (user_id) => {
      fetch(`${config.API_ENDPOINT}/api/login/${user_id}`)
      .then((res) => {
        debugger;
        return res.json()
      
      })
      .then((response) => {
        
        return this.setState({
          user_login: response.user_login,
          user_id: response.id,
          days_left: response.days_left,
          progress: response.progress,
          weekly_hours: response.weekly_hours
        })
      })
    }

    this.state = {
      user_login: '',
      user_id: 0,
      weekly_hours: 0,
      progress: 0,
      days_left: 0,
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