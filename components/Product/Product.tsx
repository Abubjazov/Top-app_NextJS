import { useState } from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'
import cn from 'classnames'

import { Button, Card, Divider, Rating, Review, Tag } from '..'
import { declOfNum, priceRu } from '../../helpers/helper'

import { ProductProps } from './Product.props'
import styles from './Product.module.css'


export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	const [reviewOpened, setReviewOpened] = useState<boolean>(false)

	return (
		<div {...props}>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<Image 
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70}
					/>
				</div>

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
					{product.categories.map(category => <Tag className={styles.category} key={nanoid()} color={'ghost'}>{category}</Tag>)}
				</div>

				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>в кредит</div>
				<div 
					className={styles.ratingTitle}				
				>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв','отзыва','отзывов'])}
				</div>

				<Divider className={styles.hr}/>

				<div className={styles.description}>{product.description}</div>

				<div className={styles.features}>
					{product.characteristics.map(characteristic => (
						<div key={nanoid()} className={styles.characteristics}>
							<span className={styles.charName}>{characteristic.name}</span>
							<span className={styles.charDots}></span>
							<span className={styles.charValue}>{characteristic.value}</span>
						</div>
					))}
				</div>

				<div className={styles.advBlock}>
					{product.advantages && <div className={styles.advantages}>
						<div className={styles.advTitle}>Преимущества</div>
						<div>{product.advantages}</div>	
					</div>}				

					{product.disadvantages && <div className={styles.disadvantages}>
						<div className={styles.advTitle}>Недостатки</div>
						<div>{product.disadvantages}</div>	
					</div>}				
				</div>

				<Divider className={cn(styles.hr, styles.hr2)}/>

				<div className={styles.actions}>
					<Button appearance={'primary'}>Узнать подробнее</Button>
					<Button 
						appearance={'ghost'} 
						arrow={reviewOpened ? 'down': 'right'} 
						className={styles.reviewBtn}
						onClick={product.reviewCount > 0 ? () => setReviewOpened(!reviewOpened): () => setReviewOpened(false)}
					>Читать отзывы</Button>
				</div>
			</Card>

			<Card color={'blue'} className={cn(styles.reviews, {
				[styles.opened]: reviewOpened,
				[styles.closed]: !reviewOpened,
			})}>
				{product.reviews && product.reviews.map(review => (
					<Review key={nanoid()} review={review}/>
				))}
			</Card>
		</div>
	)
}
