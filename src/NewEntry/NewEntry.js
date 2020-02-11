import React, { Component } from 'react'

export default class NewEntry extends Component {
  render() {
    return (
      <main role="main">
      <header>
        <h1>New Media Entry</h1>
      </header>
      <section>
        <form id="record-media">
          <div className="form-section">
            <label htmlFor="media-title">Title (required)</label>
            <input type="text" name="media-title" required />
          </div>
          <div className="form-section">
            <label htmlFor="current-or-finished">Status </label>
            <select>
              <option value="finished">I'm finished reading it</option>
              <option value="current">I'm currently reading or want to read it</option>
            </select>
          </div>
          <div className="form-section">
            <label htmlFor="media-type">Choose Media Type: </label>
            (App will have more media types and a way to enter a custom "other")
            <select>
              <option value="book">Book</option>
              <option value="article">Article</option>
              <option value="audiobook">Audiobook</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-section">
            <label htmlFor="media-author">Author (optional)</label>
            <input type="text" name="media-author" required />
          </div>
          <div className="form-section">
            <label htmlFor="media-url">Relevant Link (optional)</label>
            <input type="url" name="media-url" required />
          </div>

          <div className="form-section">
            <label htmlFor="media-notes">Notes (optional)</label>
            <textarea name="media-notes" rows="15"   required></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="reading-progress">Amount of time read so far (in minutes, enter 0 if just starting)</label>
            <input type="text" name="reading-progress" required />
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

