import { useAppSelector } from '../../app/hooks'
import Card from '../card/Card'

import styles from './Catalog.module.css';
const Catalog: React.FC = ()=> {
	const { catalogList } =  useAppSelector((state)=>state.catalog)

	const listOfCard = catalogList.map((item, index) => {
		const title = item.original_title || item.title || item.name || ''
		return <Card key={index} title={title} />
	})

	return (
		<section className={styles.catalog}>
			{listOfCard}
		</section>
	)
}

export default Catalog
