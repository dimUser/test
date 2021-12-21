import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Card from '../card/Card';
import Catalog from './Catalog';

describe('Catalog', () => {
  it('renders a list of card', () => {
    const { container } = render(
      <Provider store={store}>
        <Catalog />
      </Provider>
    );
    expect(container).toBeDefined()
    expect(<Card title="title of film" />).toBeDefined()
  });
});