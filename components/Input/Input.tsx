import { ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'

import { InputProps } from './Input.props'
import styles from './Input.module.css'

export const Input = forwardRef(({ className, error, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (		
		<div className={cn(styles.wrapper, className)}>
			<input className={cn(styles.input, {
				[styles.error]: error
			})} ref={ref} {...props} />
			{error && <span role='alert' className={styles.errorMsg}>{error.message}</span>}
		</div>
	)
})
