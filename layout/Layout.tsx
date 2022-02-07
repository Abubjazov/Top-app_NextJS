import cn from 'classnames'
import { useState } from 'react'

import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'
import { Up } from '../components'

import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [isSkipLinkDisp, setIsSkipLinkDisp] = useState<boolean>(false)

	return (
		<div className={styles.wrapper}>
			<a 
				onFocus={() => setIsSkipLinkDisp(true)}
				tabIndex={1} 
				className={cn(styles.skipLink, {
					[styles.displayed]: isSkipLinkDisp
				})}
			>
				Сразу к содержанию
			</a>

			<Header className={styles.header}/>
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>
				{children}
			</div>
			<Footer className={styles.footer}/>
			<Up />
		</div>
	)
}
