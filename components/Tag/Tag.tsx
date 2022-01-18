import cn from 'classnames'

import { TagProps } from './Tag.props'
import styles from './Tag.module.css'

export const Tag = ({className, children, size = 'm', color = 'ghost', href, ...props}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.gh]: size === 'm',
				[styles.ghost]: color === 'ghost',
				[styles.green]: color === 'green',
				[styles.grey]: color === 'grey',
				[styles.primary]: color === 'primary',
				[styles.red]: color === 'red'
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : children}
		</div>
	)
}
