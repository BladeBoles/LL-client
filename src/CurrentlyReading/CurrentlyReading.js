import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CurrentlyItem from './CurrentlyItem'
export default class CurrentlyReading extends Component {

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
      <main role="main">
        <header role="banner">
          <h1>Currently Reading</h1>

          <Link to='./new-entry'><button>Add Items</button></Link>

        </header>

        <section className="goals">
            <div>Current goal: 7 hrs/week</div>
            <div>Progress: 0.4 hours</div>
            <div>Average to achieve current goal: 1.1 hrs/day</div>
            
            <button>Edit Goals</button>
        </section>

        <section className="cr-items">
            {this.state.items.map((item, i) => {
              const itemInfo = this.state.items[i];
              
              return <Route key={i} render={(props) => <CurrentlyItem updateView={this.updateView} props={itemInfo} key={i} /> } />;
              })
            }
        </section>
      </main>
    
    )
  }
}
