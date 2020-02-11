import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NewEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
    media_name: '',
    author: '',
    media_url: '',
    current_progress: 0,
    notes: '',
    finished: false,
    media_type: 'book',
    date_started: '',
    date_finished: ''
  };

  this.handleChange = this.handleChange.bind(this);
}
  
  handleChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const dataToPost = this.state;

    fetch('http://localhost:8000/api/currently-reading', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToPost),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
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
        <h1>New Media Entry</h1>
      </header>
      <section>
        <form id="record-media" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <label htmlFor="media_title">Title (required)</label>
            <input type="text" name="media_name" value={this.state.media_name} onChange={this.handleChange} required  />
          </div>
          <div className="form-section">
            <label htmlFor="current-or-finished">Status </label>
            <select name="finished" value={this.state.finished} onChange={this.handleChange}>
              <option value="false">Currently reading</option>
              <option value="true">Finished reading</option>
            </select>
          </div>
          <div className="form-section">
            <label htmlFor="media-type">Choose Media Type: </label>
            <select name="media_type" value={this.state.media_type} onChange={this.handleChange}>
              <option value="book">Book</option>
              <option value="article">Article</option>
              <option value="audiobook">Audiobook</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-section">
            <label htmlFor="reading-progress">Amount of time read so far: </label>
            <input type="text" name="current_progress" value={this.state.current_progress} onChange={this.handleChange}  /> minutes
          </div>
          <div className="form-section">
            <label htmlFor="media-author">Author (optional)</label>
            <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="media-url">Relevant Link (optional)</label>
            <input type="url" name="media_url" value={this.state.media_url} onChange={this.handleChange} />
          </div>

          <div className="form-section">
            <label htmlFor="media-notes">Notes (optional)</label>
            <textarea name="notes" rows="5" cols="40" value={this.state.notes} onChange={this.handleChange}></textarea>
          </div>
          
          <div className="form-section">
            <label htmlFor="media-dates">Date started: </label>
            <input type="date" id="start" name="date_started" value={this.state.date_started} onChange={this.handleChange} required />

            <label htmlFor="media-dates">Date finished (optional): </label>
            <input type="date" id="finish" name="date_finished" value={this.state.date_finished} onChange={this.handleChange} />

          </div>

          <button type="submit">Submit</button>
          <button type="reset">Clear Form</button>
          <button type="button">Cancel</button>
        </form>
      </section>
    </main>
    )
  }
}

