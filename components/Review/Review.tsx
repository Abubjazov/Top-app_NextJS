import cn from 'classnames'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import { ReviewProps } from './Review.props'
import styles from './Review.module.css'

import UserIcon from './user.svg'
import { Rating } from '..'

export const Review = ({review, className, ...props}: ReviewProps): JSX.Element => {
	const { name, title, description, createdAt, rating} = review

	return (
		<div className={cn(styles.review, className)}
			{...props}
		>
			<UserIcon className={styles.reviewUser}/>

			<div>
				<span className={styles.reviewUserName}>{name}</span>
				<span className={styles.reviewTitle}>{title}</span>
			</div>

			<div className={styles.reviewDate}>
				{format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
			</div>

			<div className={styles.reviewRating}>
				<Rating rating={rating}/>
			</div>

			<div className={styles.reviewDesc}>
				{description}
			</div>
		</div>
	)
}
