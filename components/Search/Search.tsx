import cn from 'classnames'
import { KeyboardEvent, useState } from 'react'

import { Button, Input } from '..'

import { SearchProps } from './Search.props'
import styles from './Search.module.css'

import SearchIcon from './loupe.svg'
import { useRouter } from 'next/router'

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('')
	const router = useRouter()

	const goToSearch = (): void => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		})
	}

	const handleKeyDown = (e: KeyboardEvent): void => {
		e.code === 'Enter' ? goToSearch() : null
	}

	return (
		<form className={cn(className, styles.search)} {...props} role='search'>
			<Input 
				aria-label='Строка поиска'
				className={styles.input}
				placeholder='Поиск...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>

			<Button
				aria-label='Запустить поиск'
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}
			>
				<SearchIcon />
			</Button>
		</form>
	)
}
