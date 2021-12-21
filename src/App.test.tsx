import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import App from './App';
import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';

describe('App', () => {
  it('renders App component', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toBeDefined()
    expect(<Header />).toBeDefined()
    expect(<Catalog />).toBeDefined()
  });
});
