import cn from 'classnames'

import { PtagProps } from './Ptag.props'
import styles from './Ptag.module.css'

export const Ptag = ({fontSz = 'm', children, className, ...props}: PtagProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.s]: fontSz === 's',
				[styles.m]: fontSz === 'm',
				[styles.l]: fontSz === 'l'
			})}
			{...props}
		>
			{children}
		</p>
	)
}
