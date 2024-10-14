import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

it('renders home page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rhea Labayo/i);
  expect(linkElement).toBeInTheDocument();
});

test('test learn more button', () => {
  const onClick = jest.fn();
  render(<App />);
  const buttonElement = screen.getByText(/Learn More/i);
  fireEvent.click(buttonElement);
  
  expect(screen.getByText('Learn More').closest('a')).toHaveAttribute('href', '/about')
});