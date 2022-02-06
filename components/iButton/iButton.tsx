import cn from 'classnames'

import { IButtonProps, icons } from './iButton.props'
import styles from './iButton.module.css'

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
