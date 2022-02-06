import cn from 'classnames'

import { IButtonProps, icons } from './IButton.props'
import styles from './IButton.module.css'

export const IButton = ({appearance, className, icon, ...props}: IButtonProps): JSX.Element => {
	const IconComponent = icons[icon]

	return (
		<button
			className={cn(styles.ibutton, className, {
				[styles.primary]: appearance === 'primary',
				[styles.white]: appearance === 'white'
			})}
			{...props}
		>
			<IconComponent />
		</button>
	)
}
