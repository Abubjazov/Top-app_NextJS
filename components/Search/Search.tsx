import cn from 'classnames'

import { SearchProps } from './Search.props'
import styles from './Search.module.css'

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
	return (
		<div className={cn(className, styles.search)} {...props}>
		</div>
	)
}
