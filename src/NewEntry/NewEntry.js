import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import config from '../config'
import './NewEntry.css'
export default class NewEntry extends Component {
  
  static contextType = UserContext;
  
  constructor(props) {
    super(props);

    this.state = {
    media_name: '',
    author: '',
    media_url: '',
    current_progress: 0,
    notes: '',
    finished: true,
    media_type: 'book',
    date_started: '',
    date_finished: '',
    library_owner: 0
  };

  this.handleChange = this.handleChange.bind(this);
}
  
  handleChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      library_owner: this.context.user_id
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  
    let dataToPost = JSON.stringify(this.state);

    fetch(`${config.API_ENDPOINT}/api/currently-reading`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: dataToPost,
    })
    .then(res => res.json())
    .then(data => {

      this.props.history.push('/currently-reading');
    })
    .catch((error) => {
      console.error('Error:', error)
    })
  }

  render() {
    return (
      <main role="main">
      <header>
        <h1>New Entry</h1>
      </header>
      <section className="new-entry">
        <form className="item-column" id="record-media" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <label htmlFor="media_title">Title (required)</label>
            <input id="media_title" type="text" name="media_name" value={this.state.media_name} onChange={this.handleChange} required  />
          </div>
          <div className="form-section">
            <label htmlFor="current-or-finished">I'm finished reading this </label>
            <input
            id="current-or-finished"
            name="finished"
            type="checkbox"
            checked={this.state.finished}
            onChange={this.handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="media-type">Choose Media Type: </label>
            <select id="media-type" name="media_type" value={this.state.media_type} onChange={this.handleChange}>
              <option value="book">Book</option>
              <option value="article">Article</option>
              <option value="audiobook">Audiobook</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-section">
            <label htmlFor="reading-progress">Amount of time read so far: </label>
            <input id="reading-progress" type="text" name="current_progress" value={this.state.current_progress} onChange={this.handleChange}  /> minutes
          </div>
          <div className="form-section">
            <label htmlFor="media-author">Author (optional)</label>
            <input id="media-author" type="text" name="author" value={this.state.author} onChange={this.handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="media-url">Relevant Link (optional)</label>
            <input id="media-url" type="url" name="media_url" value={this.state.media_url} onChange={this.handleChange} />
          </div>

          <div className="form-section">
            <label htmlFor="media-notes">Notes (optional)</label>
            <textarea id="media-notes" name="notes" rows="5" cols="36" value={this.state.notes} onChange={this.handleChange}></textarea>
          </div>
          
          <div className="form-section">
            <label htmlFor="start">Date started: </label>
            <input type="date" id="start" name="date_started" value={this.state.date_started ? this.state.date_started.slice(0, 10) : ''} onChange={this.handleChange} required />
          </div>
          <div className="form-section">
            <label htmlFor="finish">Date finished (optional): </label>
            <input type="date" id="finish" name="date_finished" value={this.state.date_finished ? this.state.date_finished.slice(0, 10) : ''} onChange={this.handleChange} />
          </div>
          <div className="entry-buttons item-row">
            <button id="submit-button" type="submit">Submit</button>
            <Link to='./currently-reading'><button id="cancel-button">Cancel</button></Link>
          </div>
        </form>
      </section>
    </main>
    )
  }
}

