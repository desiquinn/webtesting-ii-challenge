import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import App from './App';

// Test if app is rendering to the DOM
// Test if specific text from the app is rendering to the DOM

describe('<App />', () => {

  it('renders without crashing using ReactDOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Testing Using the Testing Libarary

  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders Player At Bat', () => {
    const appHeader = render(<App />);
    appHeader.getByText(/Player At Bat/i)
  })

});