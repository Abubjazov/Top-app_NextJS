import cn from 'classnames'

import { PtagProps } from './Ptag.props'
import styles from './Ptag.module.css'

export const Ptag = ({fontSz = 'm', innerText, className, ...props}: PtagProps) => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.s]: fontSz === 's',
				[styles.m]: fontSz === 'm',
				[styles.l]: fontSz === 'l'
			})}
			{...props}
		>
			{innerText}
		</p>
	)
}
