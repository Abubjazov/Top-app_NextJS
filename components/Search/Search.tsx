import cn from 'classnames'
import { useState } from 'react'

import { Button, Input } from '..'

import { SearchProps } from './Search.props'
import styles from './Search.module.css'

import SearchIcon from './loupe.svg'
import { useRouter } from 'next/router'

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('')
	const router = useRouter()

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		})
	}

	const handleKeyDown = (e: KeyboardEvent) => {
		e.key === 'Enter' ? goToSearch() : null
	}

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input 
				className={styles.input}
				placeholder='Поиск...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>

			<Button
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}
			>
				<SearchIcon />
			</Button>
		</div>
	)
}
