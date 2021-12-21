import Search from "../search/Search"

import styles from './Header.module.css'

const Header:React.FC = () => {
	return (
		<header className={styles.header}>
			<Search />
		</header>
	)
}

export default Header
