import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CurrentlyItem from './CurrentlyItem'
import UserContext from '../context/UserContext'
import './CurrentlyReading.css'
export default class CurrentlyReading extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      editGoals: true, 
      weeklyHours: 7,
      progress: 0.4,
      daysLeft: 4,
      dailyAvg: 0,
      library_owner: 1
    }
    this.updateGoals = this.updateGoals.bind(this);
  }
  
  updateView = () => {
    fetch(`http://localhost:8000/api/currently-reading`, {
      method: 'GET'
    })
      .then (res => res.json())
      .then(response => {
        this.setState({items: response})
        console.log('Current state:', this.state, 'Owner, user ids:', this.state.library_owner, this.context.user_id)

      })  

      .catch(error => {
        console.error(error)
      })
  }

  calculateAvg = () => {
    const dailyAvg = ((this.state.weeklyHours - this.state.progress)/this.state.daysLeft);
    this.setState({
      dailyAvg
    }, () => console.log("Daily avg:", dailyAvg))
  }

  componentDidMount() {
    this.updateView();
    this.calculateAvg();
  }

  updateGoals (event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: parseInt(value),
    }, 
    this.calculateAvg)
  }

  editGoalsForm = () => {
    this.setState({
      editGoals: !this.state.editGoals
    })
  }

  
  render() {
    
    return (
      <main role="main">
        <header role="banner">
          <h1>Currently Reading</h1>
          <h3>Showing items for user_id: {this.context.user_id}</h3>
          <Link to='./new-entry'><button>Add Items</button></Link>

        </header>

        <section className="goals">
            <div>Current goal: {this.state.weeklyHours} hrs/week</div>
            <div>Progress: {this.state.progress} hours</div>
            <div>Average to achieve current goal: {this.state.dailyAvg} hrs/day</div>
            
            <button onClick={this.editGoalsForm}>{this.state.editGoals ? 'Confirm Goal' : 'Edit Goal'}</button>

            {this.state.editGoals ? (
            <form className="goal-form">
              <label htmlFor="set-goal">Weekly Goal (hours): </label>
              <input type="number" name="weeklyHours" value={this.state.weeklyHours} onChange={this.updateGoals} />
            </form>) : ''}

        </section>

        <section className="cr-items">
            {this.state.items.map((item, i) => {
              const itemInfo = this.state.items[i];
              return (item.library_owner === this.context.user_id && item.finished === false) ? 
              (<Route key={i} render={(props) => <CurrentlyItem updateView={this.updateView} props={itemInfo} key={i} /> } />) : 
              '';
              })
            }
        </section>
      </main>
    
    )
  }
}
