import React, { Component } from 'react'

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

  render() {
    return (
      <main role="main">
      <header>
        <h1>New Media Entry</h1>
      </header>
      <section>
        <form id="record-media">
          <div className="form-section">
            <label htmlFor="media_title">Title (required)</label>
            <input type="text" name="media_title" value={this.state.media_title} onChange={this.handleChange} required  />
          </div>
          <div className="form-section">
            <label htmlFor="current-or-finished">Status </label>
            <select name="finished" value={this.state.finished} onChange={this.handleChange}>
              <option value="false">I'm currently reading it</option>
              <option value="true">I'm finished reading it</option>
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
            <p className="media-date-header">Date media started</p>
            <input type="number" name="date-month" placeholder="01" min="1" max="12" required="" />
            <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required="" />
            <input type="number" name="date-year" className="date-year" placeholder="2017" min="2016" max="2017" required="" />

            <p className="media-date-header">Date media finished (ignore if new entry)</p>
            <input type="number" name="date-month" placeholder="01" min="1" max="12" required="" /> .
            <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required=""/>
            <input type="number" name="date-year" className="date-year" placeholder="2017" min="2016" max="2017" required="" />
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

