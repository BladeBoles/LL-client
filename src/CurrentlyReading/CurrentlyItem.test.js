import React from 'react';
import ReactDOM from 'react-dom';
import CurrentlyItem from './CurrentlyItem'

/* Testing with context has not been implemented as a feature.
Because of that, we were given permission to leave this part out. */
it.skip('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<CurrentlyItem />, div);

  ReactDOM.unmountComponentAtNode(div);
});
