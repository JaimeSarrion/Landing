import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and main sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /jaime sarrión/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /my projects/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /social networks/i })).toBeInTheDocument();
});
