import React, { Component } from 'react'

export default class CurrentlyItem extends Component {
  
  render() {
    const { author, current_progress, date_started, media_name, media_type, media_url, notes, id } = this.props.props;
    return (
      
      <div className="expanded">
        <div className="inner">
          <h4>Title: {media_name} ({media_type})</h4> 
          <p>Progress: {(current_progress)/60} hours</p>
          <ul>
            <li key={`${id}author`}>Author: {author}</li>
            <li key={`${id}url`}>URL: {media_url}</li>
            <li key={`${id}notes`}>Notes: {notes}</li>
            <li key={`${id}started`}>Started on: {date_started}</li>
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
