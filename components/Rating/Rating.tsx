import { useEffect, useState } from 'react'
import cn from 'classnames'
import { nanoid } from 'nanoid'

import { RatingProps } from './Rating.props'
import StarIcon from './star.svg'
import styles from './Rating.module.css'

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((item: JSX.Element, index: number) => {
			return (
				<StarIcon 
					className={cn(styles.star, {
						[styles.filled]: index < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(index + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => changeClick(index + 1)}
				/>
			)
		})

		setRatingArray(updatedArray)
	}

	const changeDisplay = (index: number): void => {
		if(!isEditable) return

		constructRating(index)
	}

	const changeClick = (index: number): void => {
		if(!isEditable || !setRating) return

		setRating(index)
	}

	return (
		<div {...props}
		>
			{ratingArray.map(rating => (<span key={nanoid()}>{rating}</span>))}
		</div>
	)
}
