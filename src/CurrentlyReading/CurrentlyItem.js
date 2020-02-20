import React, { Component } from 'react'
import UserContext from '../context/UserContext'
import config from '../config'
import './CurrentlyReading.css'
export default class CurrentlyItem extends Component {
  
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      ...this.props.itemInfo
    }
  }

  deleteCurrentlyItem = (event) => {
    const idToDelete = event.target.value;

    this.context.deleteItem(idToDelete);
  }

  editCurrentlyItem = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  editFormCurrentlyItem = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    })
  }
  
  updateCurrentlyItem = (event) => {
    event.preventDefault();
    
    let updateInfo = this.state;
    this.context.updateItem(this.props.itemInfo.id, updateInfo);
    console.log(updateInfo);
    this.editCurrentlyItem();
  }  

  completedItem = (event) => {
    event.preventDefault();
    this.context.completedItem(this.props.itemInfo.id, this.props.itemInfo.finished);
  }

  componentDidMount() {
    this.context.fetchProfile(this.context.user_login);
  }

  render() {
    const { author , current_progress, date_started, media_name, media_type, media_url, notes, id, library_owner } = this.props.itemInfo;
    return (
      
      <div className="outer item-column">
        <h3>Title: {media_name} ({media_type})</h3> 
            <p>Progress: {(current_progress)/60} hours</p>
            <ul>
              <li key={`${id}`}>Author: {author}</li>
              <li key={`${id}url`}>URL: {media_url}</li>
              <li key={`${id}notes`}>Notes: {notes}</li>
              <li key={`${id}started`}>Started on: {date_started}</li>
            </ul>
          <div class="item-buttons item-row">
            <button id="edit-button" value={id} onClick={this.editCurrentlyItem}>Edit</button>
            <button id="delete-button" value={id} onClick={this.deleteCurrentlyItem}>Delete</button>
          </div>
            <button id="mark-button" value={id} onClick={this.completedItem}>Mark {this.props.itemInfo.finished === true ? '"In Progress"' : "Completed"}</button>  
          {(this.state.editing) ? 
          (
          <form class="item-column" onSubmit={this.updateCurrentlyItem}>
            <label htmlFor="author">Author: </label>
            <input type="text" name="author" value={this.state.author} onChange={this.editFormCurrentlyItem} />

            <label htmlFor="current_progress">Progress(minutes): </label>
            <input type="number" name="current_progress" value={this.state.current_progress} onChange={this.editFormCurrentlyItem} />

            <label htmlFor="date_started">Date Started: </label>
            <input type="date" name="date_started" value={this.state.date_started} onChange={this.editFormCurrentlyItem} />

            <label htmlFor="media_name">Title: </label>
            <input type="text" name="media_name" value={this.state.media_name} onChange={this.editFormCurrentlyItem} />

            <label htmlFor="media_type">Media Type: </label>
            <input type="text" name="media_type" value={this.state.media_type} onChange={this.editFormCurrentlyItem} />

            <label htmlFor="media_url">Url: </label>
            <input type="text" name="media_url" value={this.state.media_url} onChange={this.editFormCurrentlyItem} />

            <label htmlFor="notes">Notes: </label>
            <input type="text" name="notes" value={this.state.notes} onChange={this.editFormCurrentlyItem} />

            <button>Finished editing</button>
          </form>
          ) 
          : ''
          }  
      </div>
    );
  }
}
