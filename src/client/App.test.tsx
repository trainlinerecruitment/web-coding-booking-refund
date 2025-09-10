import React from 'react';
import { render, screen } from '@testing-library/react';


import App from './App';

describe('RTL test', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Booking list/i);
    expect(linkElement).toBeInTheDocument();
  });
})

