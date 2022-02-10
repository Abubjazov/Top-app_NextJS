import cn from 'classnames'
import { useState, KeyboardEvent, useRef } from 'react'

import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'
import { Up } from '../components'

import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [isSkipLinkDisp, setIsSkipLinkDisp] = useState<boolean>(false)
	const bodyRef = useRef<HTMLDivElement>(null)

	const skipContentAction = (key: KeyboardEvent): void => {
		if (key.code === 'Enter' || key.code === 'Space') {
			key.preventDefault()
			bodyRef.current?.focus()
		}

		setIsSkipLinkDisp(false)
	}

	return (
		<div className={styles.wrapper}>
			<a 
				onFocus={() => setIsSkipLinkDisp(true)}
				tabIndex={0} 
				className={cn(styles.skipLink, {
					[styles.displayed]: isSkipLinkDisp
				})}
				onKeyDown={skipContentAction}
			>
				Сразу к содержанию
			</a>

			<Header className={styles.header}/>
			<Sidebar className={styles.sidebar} />
			<main className={styles.body} ref={bodyRef} tabIndex={0} role='main'>
				{children}
			</main>
			<Footer className={styles.footer}/>
			<Up />
		</div>
	)
}
