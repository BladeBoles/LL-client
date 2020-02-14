import React, { Component } from 'react'
import config from '../config'

export default class LibraryItem extends Component {
  
  deleteLibraryItem = (event) => {
    const idToDelete = event.target.value;
    fetch(`${config.API_ENDPOINT}/api/currently-reading/${idToDelete}`, {
      method: 'DELETE',
    })
    .then(res => this.props.updateView())
    .catch(error => console.error('error: ', error))
  }

  render() {
    const { author, current_progress, date_started, date_finished, media_name, media_type, media_url, notes, id } = this.props.props;
    return (
      
      <div className="expanded">
        <div className="inner">
          <h4>Title: {media_name} ({media_type})</h4> 
          <p>Progress: {(current_progress)/60} hours</p>
          <ul>
            <li key={`${id}author`}>Author: {author}</li>
            <li key={`${id}url`}>URL: {media_url}</li>
            <li key={`${id}notes`}>Notes: {notes}</li>
            <li key={`${id}startedon`}>Started on: {date_started}</li>
            <li key={`${id}finishedon`}>Finished on: {date_finished}</li>
          </ul>
        </div>
      <p>Time: 00:03:54</p>
        <button value={id} onClick={this.deleteLibraryItem}>Delete Item</button>
      </div>
    );
  }
}
