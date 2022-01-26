import cn from 'classnames'
import { nanoid } from 'nanoid'

import { ProductProps } from './Product.props'
import styles from './Product.module.css'
import { Button, Card, Rating, Tag } from '..'
import { priceRu } from '../../helpers/helper'

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	return (
		<Card className={styles.product} >
			<div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
			<div className={styles.title}>{product.title}</div>

			<div className={styles.price}>
				{priceRu(product.price)}
				{product.oldPrice && <Tag className={styles.oldPrice} color={'green'}>{priceRu(product.price - product.oldPrice)}</Tag>}
			</div>

			<div className={styles.credit}>
				{priceRu(product.credit)}/<span>мес</span>
			</div>

			<div className={styles.rating}>
				<Rating rating={product.reviewAvg ?? product.initialRating}/>
			</div>

			<div className={styles.tags}>
				{product.categories.map(category => <Tag key={nanoid()} color={'ghost'}>{category}</Tag>)}
			</div>

			<div className={styles.priseTitle}>цена</div>
			<div className={styles.creditTitle}>в кредит</div>
			<div className={styles.ratingTitle}>{product.reviewCount} отзывов</div>

			<div className={styles.hr}><hr /></div>

			<div className={styles.description}>{product.description}</div>
			<div className={styles.features}>FEATURES</div>

			<div className={styles.advBlock}>
				<div className={styles.advantages}>
					<div>Преимущества</div>
					<div>{product.advantages}</div>	
				</div>

				<div className={styles.disadvantages}>
					<div>Недостатки</div>
					<div>{product.disadvantages}</div>	
				</div>
			</div>

			<div className={styles.hr}><hr /></div>

			<div className={styles.actions}>
				<Button appearance={'primary'}>Узнать подробнее</Button>
				<Button appearance={'ghost'} arrow={'right'}>Читать отзывы</Button>
			</div>
		</Card>
	)
}
