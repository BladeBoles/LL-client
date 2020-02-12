import React, { Component } from 'react'

export default class MyLibrary extends Component {
  render() {
    return (
      <div>
        <main role="main">
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
        <h4>Jan 31, 2020</h4>
        <section>
            Parry Hotter and the Storcered's Sone (Book) - 25 hrs
        </section>

        <section>
            Atlas Shrugged (Book) - 9,231 hrs
        </section>
        <h4>March 3, 2015</h4>
        <section className="project3">
            "Colour From Outer Space" (Short Story) - 30 min
            <div className="expanded">
              <div className="inner">
                <ul>
                  <li>Author: H.P. Lovecraft</li>
                  <li>Date Started: 03-03-2015</li>
                  <li>Date Finished: 03-03-2015</li>
                  <li>Notes: Bad person, but good author</li>
                </ul>
                <button>Delete</button>
              </div>
            </div>
        </section>
       
    </main>
    </div>
    )
  }
}
