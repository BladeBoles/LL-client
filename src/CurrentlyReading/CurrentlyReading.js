import React, { Component } from 'react'

export default class CurrentlyReading extends Component {
  render() {
    return (
      <div>
        <main role="main">
		<header role="banner">
			<h1>Currently Reading
			</h1>
			<button>Add Items</button>
    </header>

        <section class="goals">
            <div>Current goal: 7 hrs/week</div>
            <div>Progress: 0.4 hours</div>
            <div>Average to achieve current goal: 1.1 hrs/day</div>
            
            <button>Edit Goals</button>
        </section>

        <section>
            Moby Dick (Book) - 6 hrs total
        </section>

        <section>
            Little Women (Audiobook) - 3 hrs total
        </section>

        <section class="project3">
            "How Much Sleep Do You Need?" (Article) - 15 min total
            <div class="expanded">
              <div class="inner">
                <ul>
                  <li>Author: Willie Nelson</li>
                  <li>URL: www.groovytunes.com/sleep</li>
                  <li>Notes: 6 hours isn't enough</li>
                </ul>
              </div>
            <p>Time: 00:03:54</p>
            <div class="button-div">
              <button>Pause Timer</button>
          
              <button>Reset timer</button>
              <button>Mark as finished</button>
            </div>
            </div>
            
        </section>
        
    </main>
      </div>
    )
  }
}
