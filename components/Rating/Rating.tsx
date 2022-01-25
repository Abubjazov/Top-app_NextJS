import { useEffect, useState, KeyboardEvent } from 'react'
import cn from 'classnames'
import { nanoid } from 'nanoid'

import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'

import StarIcon from './star.svg'

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		constructRating(rating)
	}, [rating]) // eslint-disable-line react-hooks/exhaustive-deps

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((item: JSX.Element, index: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: index < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(index + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => changeClick(index + 1)}
				>
					<StarIcon 
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && spaceDown(index + 1, e) }
					/>
				</span>
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

	const spaceDown = (index: number, e: KeyboardEvent<SVGElement>): void => {
		if(!isEditable || !setRating || e.code !== 'Space') return

		setRating(index)
	}

	return (
		<div {...props}
		>
			{ratingArray.map(rating => (<span key={nanoid()}>{rating}</span>))}
		</div>
	)
}
