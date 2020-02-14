import React, { Component } from 'react'
import UserContext from '../context/UserContext'
import config from '../config'
export default class CurrentlyItem extends Component {
  
  static contextType = UserContext;

  deleteCurrentlyItem = (event) => {
    const idToDelete = event.target.value;
    fetch(`${config.API_ENDPOINT}/api/currently-reading/${idToDelete}`, {
      method: 'DELETE',
    })
    .then(res => this.props.updateView())
    .catch(error => console.error('error: ', error))
  }

  render() {
    const { author, current_progress, date_started, media_name, media_type, media_url, notes, id, library_owner } = this.props.props;
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
            <li key={`${id}user_id`}>Owned By: {library_owner}</li>
          </ul>
        </div>
      <p>Time: 00:03:54</p>
      <div className="timer-button-div">
        <button>Pause Timer</button>
    
        <button>Reset timer</button>
        <button>Mark as finished</button>
      </div>
        <button value={id} onClick={this.deleteCurrentlyItem}>Delete Item</button>
      </div>
    );
  }
}
