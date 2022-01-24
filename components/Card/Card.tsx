import cn from 'classnames'

import { CardProps } from './Card.props'
import styles from './Card.module.css'

export const Card = ({children, className, ...props}: CardProps): JSX.Element => {
	return (
		<>
		
		</>
		// <p
		// 	className={cn(styles.p, className, {
		// 		[styles.s]: fontSz === 's',
		// 		[styles.m]: fontSz === 'm',
		// 		[styles.l]: fontSz === 'l'
		// 	})}
		// 	{...props}
		// >
		// 	{children}
		// </p>
	)
}
