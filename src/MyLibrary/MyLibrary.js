import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import LibraryItem from './LibraryItem'
import UserContext from '../context/UserContext'
import './MyLibrary.css'

export default class MyLibrary extends Component {
  static contextType = UserContext;
  
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  updateView = () => {
    fetch(`http://localhost:8000/api/currently-reading`, {
      method: 'GET'
    })
      .then (res => res.json())
      .then(response => {
        this.setState({items: response})
        console.log('Current state:', this.state)

      })  

      .catch(error => {
        console.error(error)
      })
  }

  componentDidMount() {
    this.updateView();
  }

  render() {
    return (
      <div>
		<header role="banner">
			<h1>My Library</h1>
      <h3>Showing items for user_id: {this.context.user_id}</h3>
			<button>Add Items</button>
      <div className="form-section">
            <label htmlFor="current-or-finished">Showing Results For:</label>
            <select>
              <option value="forever">All Time</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="today">Today</option>
            </select>
          </div>
    </header>
    <main role="main">
        <section className="ml-items">
            {this.state.items.map((item, i) => {
              const itemInfo = this.state.items[i];
              
              return (item.finished && item.library_owner === this.context.user_id) ? (<Route key={i} render={(props) => <LibraryItem updateView={this.updateView} props={itemInfo} key={i} /> } />) : '';
              })
            }
        </section>
    </main>
    </div>
    )
  }
}
