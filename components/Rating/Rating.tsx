import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from 'react'
import cn from 'classnames'
import { nanoid } from 'nanoid'

import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'

import StarIcon from './star.svg'

export const Rating = forwardRef(({isEditable = false, rating, setRating, error, tabIndex, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
	const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const computeFocus = (r: number, i: number): number => {
		if (!isEditable) {
			return -1
		}

		if (!rating && i == 0) {
			return tabIndex ?? 0
		}

		if (r == i + 1) {
			return tabIndex ?? 0
		}

		return -1
	}

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
					tabIndex={computeFocus(rating, index)}
					onKeyDown={handleKey}
					ref={ref => ratingArrayRef.current?.push(ref)}
				>
					<StarIcon 
						
					/>
				</span>
			)
		})

		setRatingArray(updatedArray)
	}

	const changeDisplay = (index: number): void => {
		if(!isEditable) {
			return
		}

		constructRating(index)
	}

	const changeClick = (index: number): void => {
		if(!isEditable || !setRating) return

		setRating(index)
	}

	const handleKey = (e: KeyboardEvent): void => {
		if(!isEditable || !setRating) {
			return
		}

		if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
			if (!rating) {
				setRating(1)
			} else {
				e.preventDefault()
				setRating(rating < 5 ? rating + 1 : 5)
			}

			ratingArrayRef.current[rating]?.focus()
		}

		if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
			e.preventDefault()
			setRating(rating > 0 ? rating - 1 : 0)
			ratingArrayRef.current[rating - 2]?.focus()
		}
	}

	return (
		<div {...props} ref={ref} className={cn(styles.wrapper, {
			[styles.error]: error
		})} >
			{ratingArray.map(rating => (<span key={nanoid()}>{rating}</span>))}
			{error && <span className={styles.errorMsg}>{error.message}</span>}
		</div>
	)
})
