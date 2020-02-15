import React, { Component } from 'react'
import UserContext from '../context/UserContext'
import config from '../config'
export default class CurrentlyItem extends Component {
  
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      author: this.props.itemInfo.author, 
      current_progress: this.props.itemInfo.current_progress, 
      date_started: this.props.itemInfo.date_started, 
      media_name: this.props.itemInfo.media_name,
      media_type: this.props.itemInfo.media_type,
      media_url: this.props.itemInfo.media_url,
      notes: this.props.itemInfo.notes 
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
    delete updateInfo.editing; 
    this.context.updateItem(this.props.itemInfo.id, updateInfo);
    this.editCurrentlyItem();
  }  

  render() {
    const { author , current_progress, date_started, media_name, media_type, media_url, notes, id, library_owner } = this.props.itemInfo;
    return (
      
      <div className="expanded">
        <div className="inner">
          <h4>Title: {media_name} ({media_type})</h4> 
          <p>Progress: {(current_progress)/60} hours</p>
          <ul>
            <li key={`${id}`}>: {}</li>
            <li key={`${id}url`}>URL: {media_url}</li>
            <li key={`${id}notes`}>Notes: {notes}</li>
            <li key={`${id}started`}>Started on: {date_started}</li>
            <li key={`${id}user_id`}>Owned By: {library_owner}</li>
          </ul>
        </div>

        {(this.state.editing) ? 
        (<form onSubmit={this.updateCurrentlyItem}>
          <label htmlFor="author">Author: </label>
          <input type="text" name="author"  value={this.state.author} onChange={this.editFormCurrentlyItem} />

          <label htmlFor="current_progress">Progress(minutes): </label>
          <input type="text" name="current_progress" value={this.state.current_progress} onChange={this.editFormCurrentlyItem} />

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
        </form>) 
        : ''
        }
        <button value={id} onClick={this.editCurrentlyItem}>Edit Item</button>
        <button value={id} onClick={this.deleteCurrentlyItem}>Delete Item</button>
      </div>
    );
  }
}
