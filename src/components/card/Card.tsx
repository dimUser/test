import styles from './Card.module.css'

interface CardProps {
	title: string
}

const Card: React.FC<CardProps> = ({title})=> {
	return (
		<div className={styles.card}>
			<p>{title}</p>
		</div>
	)
}

export default Card
