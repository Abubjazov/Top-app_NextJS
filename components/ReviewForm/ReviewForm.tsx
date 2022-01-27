import { useState } from 'react'
import cn from 'classnames'

import { Button, Input, Rating, Textarea } from '..'

import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'

import CrossIcon from './cross.svg'

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	const [rating, setRating] = useState<number>(0)

	return (
		<>
			<div className={cn(styles.reviewForm, className)}
				{...props}
			>
				<Input placeholder='Имя'/>
				<Input placeholder='Заголовок отзыва'/>

				<div className={styles.rating}>
					<span>Оценка:</span>
					<Rating rating={rating} isEditable setRating={setRating} />
				</div>			

				<Textarea className={styles.description} placeholder='Текст отзыва'/>			

				<div className={styles.submit}>
					<Button appearance={'primary'}>Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>

			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, ваш отзыв будет опубликован после премодерации.
				</div>
				<CrossIcon className={styles.successCross}/>
			</div>
		</>	
	)
}
