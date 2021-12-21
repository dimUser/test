import { useEffect } from 'react';
import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';
import { batch } from 'react-redux';
import { useAppDispatch } from './app/hooks';
import { getMoviesAsync, getTVAsync } from './features/catalog/catalogSlice';

import './App.css';

const App:React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(()=>{
    batch(() => {
      dispatch(getMoviesAsync());
      dispatch(getTVAsync());
    })
	}, [dispatch])

  return (
    <section className="App">
      <Header />
      <Catalog />
    </section>
  );
}

export default App;