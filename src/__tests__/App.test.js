import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('Renders App Components', () => {
    render(<App />);
    screen.debug();
  });
});