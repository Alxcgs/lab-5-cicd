import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders a heading', () => {
    // Basic test
    render(<App />);
    const mainElement = screen.getByText(/Get started/i);
    expect(mainElement).toBeInTheDocument();
  });
});
