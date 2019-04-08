import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect'; // giving matchers like .tobeInTheDocument();

import App from './App';

describe('<App />', () => {

  it('renders without crashing', () => {
    const helpers = render(<App />);
  });

  it('renders Hello world', () => {
    const { getByText } = render(<App />);

    const text = getByText(/hello world/i)

    expect(text).toBeInTheDocument();
  });
})
  

// /i means I don't care about the casing

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });