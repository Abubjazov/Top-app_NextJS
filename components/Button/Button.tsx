import cn from 'classnames'
import { motion, useMotionValue } from 'framer-motion'

import { ButtonProps } from './Button.props'
import styles from './Button.module.css'

import ArrowIcon from './buttonArrow.svg'
import { useEffect } from 'react'

export const Button = ({children, appearance, className, arrow = 'none', ...props}: ButtonProps): JSX.Element => {
	const scale = useMotionValue(1)

	useEffect(() => {
		scale.onChange(s => console.log(s))
	}, [])

	return (
		<motion.button
			whileHover={{ scale: 1.03 }}
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost'
			})}
			style={{ scale }}
			{...props}
		>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow === 'down'
			})}><ArrowIcon /></span>}
		</motion.button>
	)
}
