import cn from 'classnames'

import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'


export const ReviewForm = ({ className, ...props }: ReviewFormProps): JSX.Element => {
	return (
		<div className={cn(styles.form, className)}
			{...props}
		>

		</div>
	)
}
