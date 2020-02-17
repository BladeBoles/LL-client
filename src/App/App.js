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

    this.fetchProfile = (user_login) => {
      fetch(`${config.API_ENDPOINT}/api/login/${user_login}`)
      .then((res) => {

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

    this.updateView = () => {
      fetch(`${config.API_ENDPOINT}/api/currently-reading`, {
        method: 'GET'
      })
        .then (res => res.json())
        .then(response => {
          this.setState({items: response})
        })  
  
        .catch(error => {
          console.error(error)
        })
    }

    this.updateProfile = (profileUpdates) => {
  
      const userToUpdate = this.state.user_login;
  
      fetch(`${config.API_ENDPOINT}/api/login/${userToUpdate}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: profileUpdates,
      })
        .then(res => this.fetchProfile(this.state.user_login))
        .catch(error => console.error('Error: ', error))
    }

    this.deleteItem = (itemToDelete) => {
      fetch(`${config.API_ENDPOINT}/api/currently-reading/${itemToDelete}`, {
        method: 'DELETE',
      })
      .then(res => this.updateView())
      .catch(error => console.error('error: ', error))
    }

    this.updateItem = (itemIdToUpdate, itemUpdates) => {
    
      fetch(`${config.API_ENDPOINT}/api/currently-reading/${itemIdToUpdate}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemUpdates),
      })
        .then(res => console.log(res))
        .then(res => this.updateView())
        .catch(error => console.error('Error: ', error))
    }

    this.state = {
      items: [
        {
          id: 0,
          media_name: '',
          author: '',
          media_url: '',
          current_progress: 0,
          notes: '',
          finished: false,
          media_type: '',
          date_started: '',
          date_finished: null,
          library_owner: 0
        }
      ],
      user_login: '',
      user_id: 0,
      weekly_hours: 0,
      progress: 0,
      days_left: 0,
      fetchProfile: this.fetchProfile,
      updateProfile: this.updateProfile,
      updateView: this.updateView,
      deleteItem: this.deleteItem,
      updateItem: this.updateItem
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