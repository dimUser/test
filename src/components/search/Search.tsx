import { useState } from "react"
import { batch } from "react-redux";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	initCatalogList,
	searchAsync,
	resetCatalogList
} from '../../features/catalog/catalogSlice';
import { useSearchParams } from 'react-router-dom'

import styles from './Search.module.css';

const Search:React.FC = () => {
	const dispatch = useAppDispatch();
	const { movies, tv } =  useAppSelector((state)=>state.catalog);
	const [searchValue, setSearchValue] = useState<string>('');
	const [, setSearchParams] = useSearchParams();

	const handleChange:(e: React.FormEvent<HTMLInputElement>)=>void = (e) => {
		const newValue = e.currentTarget.value;
		setSearchValue(newValue);
		
		if(newValue === ''){
			setSearchParams({});
			batch(() => {
				dispatch(resetCatalogList())
				dispatch(initCatalogList([...movies.results, ...tv.results]))
			})
		} else {
			setSearchParams({'search': newValue})
		}
	}
	
	const handleSubmit:(e: React.FormEvent) => void = (e) => {
		e.preventDefault();
		if(searchValue !== '') {
			dispatch(searchAsync(searchValue))
		} else {
			batch(() => {
				dispatch(resetCatalogList())
				dispatch(initCatalogList([...movies.results, ...tv.results]))
			})
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input className={styles.searchBar} type="text" aria-label="search by title" placeholder="search by title" value={searchValue} onChange={handleChange} />
		</form>
	)
}

export default Search
