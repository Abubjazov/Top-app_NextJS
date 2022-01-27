import { ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'

import { TextareaProps } from './Textarea.props'
import styles from './Textarea.module.css'

export const Textarea = forwardRef(({ className, error, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<textarea className={cn(styles.textarea,{
				[styles.error]: error
			})} ref={ref} {...props} />
			{error && <span className={styles.errorMsg}>{error.message}</span>}
		</div>
	)
})
