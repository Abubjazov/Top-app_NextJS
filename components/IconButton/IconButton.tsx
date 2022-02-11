import cn from 'classnames'

import { IconButtonProps, icons } from './IconButton.props'
import styles from './IconButton.module.css'

export const IconButton = ({appearance, className, icon, ...props}: IconButtonProps): JSX.Element => {
	const IconComponent = icons[icon]

	return (
		<button
			className={cn(styles.iconbutton, className, {
				[styles.primary]: appearance === 'primary',
				[styles.white]: appearance === 'white'
			})}
			{...props}
		>
			<IconComponent />
		</button>
	)
}
