import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import LibraryItem from './LibraryItem'

export default class MyLibrary extends Component {
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
        console.log('Current state:', this.state.items)

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
			<h1>My Library
			</h1>
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
              
              return item.finished !== false ? (<Route key={i} render={(props) => <LibraryItem updateView={this.updateView} props={itemInfo} key={i} /> } />) : '';
              })
            }
        </section>
    </main>
    </div>
    )
  }
}
