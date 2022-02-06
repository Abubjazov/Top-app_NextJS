import cn from 'classnames'
import { motion, useMotionValue } from 'framer-motion'

import { ButtonProps } from './Button.props'
import styles from './Button.module.css'

import ArrowIcon from './buttonArrow.svg'

export const Button = ({children, appearance, className, arrow = 'none', ...props}: ButtonProps): JSX.Element => {
	return (
		<motion.button
			whileHover={{ scale: 1.03 }}
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost'
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow === 'down'
			})}><ArrowIcon /></span>}
		</motion.button>
	)
}
