import cn from 'classnames'
import { motion } from 'framer-motion'

import { IButton } from '../../components'
import { Sidebar } from '../Sidebar/Sidebar'

import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

import Logo from '../logo.svg' 

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header 
			className={cn(className, styles.header)} 
			{...props}
		>
			<Logo />
			<IButton appearance='white' icon='MenuIcon'/>

			<motion.div className={styles.mobileMenu}>
				<Sidebar />
				<IButton className={styles.closeMenu} appearance='white' icon='CloseIcon'/>
			</motion.div>
		</header>
	)
}
