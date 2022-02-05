import cn from 'classnames'

import { iButtonProps } from './iButton.props'
import styles from './iButton.module.css'

import Icon from './icon.svg'

export const iButton = ({children, appearance, className, icon, ...props}: iButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost'
			})}
			{...props}
		>
			{children}
			{icon !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: icon === 'down'
			})}><Icon /></span>}
		</button>
	)
}
