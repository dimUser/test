import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Header from './Header';
import Search from '../search/Search';

describe('Header', () => {
  it('renders the header of the app', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toBeDefined()
    expect(<Search />).toBeDefined()
  });
});