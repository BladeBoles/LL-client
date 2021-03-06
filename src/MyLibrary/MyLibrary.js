import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import './MyLibrary.css'
import CurrentlyItem from '../CurrentlyReading/CurrentlyItem'
export default class MyLibrary extends Component {
  static contextType = UserContext;
  
  constructor(props) {
    super(props);
    this.state = {
      editGoals: false, 
      weekly_hours: 0,
      progress: 0,
      days_left: 0,
      library_owner: 0
    }
  }

  componentDidMount() {
    this.context.fetchProfile(this.context.user_login, this.context.user_password);
    this.context.updateView();
  }

  render() {
    return (
      <div>
		<header role="banner">
			<h1>My Library</h1>
			<Link to='./new-entry'><button className="library-add-items">Add Items</button></Link>

    </header>
    <main role="main">
        <section className="ml-items">
            {this.context.items.map((item, i) => {
              const itemInfo = this.context.items[i];
              
              return (item.finished === true && item.library_owner === this.context.user_id) ? (<Route key={i} render={(props) => <CurrentlyItem itemInfo={itemInfo} key={i} /> } />) : '';
              })
            }
        </section>
    </main>
    </div>
    )
  }
}
