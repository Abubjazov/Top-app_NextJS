import cn from 'classnames'

import { ReviewProps } from './Review.props'
import styles from './Review.module.css'

export const Review = ({children, className, ...props}: ReviewProps): JSX.Element => {
	return (
		<div className={cn(styles.review, className)}
			{...props}
		>
			{children}
		</div>
	)
}
