import React, { Component } from 'react'

export default class CurrentlyItem extends Component {
  constructor(props) {
    const { author, current_progress, date_finished, date_started, finished, id, media_name, media_type, media_url, notes } = this.props.props;
  }
  
  
  
  
  render() {
    return (
      <div className="expanded">
        <div className="inner">
          <h4>Title: {}(</h4>

          <ul>
            <li>Author: Willie Nelson</li>
            <li>URL: www.groovytunes.com/sleep</li>
            <li>Notes: 6 hours isn't enough</li>
          </ul>
        </div>
      <p>Time: 00:03:54</p>
      <div className="button-div">
        <button>Pause Timer</button>
    
        <button>Reset timer</button>
        <button>Mark as finished</button>
      </div>
      </div>
    );
  }
}
