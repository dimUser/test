import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Search from './Search';

describe('Search', () => {
  it('render search component', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toBeDefined()
  });

  it('should render a input type text', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>
    );
    const inputElement = screen.getByLabelText('search by title')
    expect(inputElement).toBeInTheDocument()
  });
});
