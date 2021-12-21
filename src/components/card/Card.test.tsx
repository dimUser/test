import { render, screen } from '@testing-library/react';
import Card from './Card';
describe('Card', () => {
  it('renders a movie or tv show card', () => {
    render(<Card title="title" />);
    const cardElement = screen.getByText('title');
    expect(cardElement).toBeInTheDocument();
  });
});