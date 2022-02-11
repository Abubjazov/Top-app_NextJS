import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { motion, useReducedMotion } from 'framer-motion'

import { IconButton } from '../../components'
import { Sidebar } from '../Sidebar/Sidebar'

import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

import Logo from './logo.svg' 

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false)
	const shouldReduceMotion = useReducedMotion()
	const router = useRouter()

	useEffect(() => {
		setIsOpened(false)
	}, [router])

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: shouldReduceMotion ? 1 : 0,
			x: '100%',
		}
	}

	return (
		<header 
			className={cn(className, styles.header)} 
			{...props}
		>
			<Logo />
			<IconButton 
				appearance='white' 
				icon='MenuIcon'
				onClick={() => setIsOpened(true)}
			/>

			<motion.div 
				className={styles.mobileMenu}
				variants={variants}
				initial={'closed'}
				animate={isOpened ? 'opened' : 'closed'}
			>
				<Sidebar />
				<IconButton 
					className={styles.closeMenu} 
					appearance='white' 
					icon='CloseIcon'
					onClick={() => setIsOpened(false)}
				/>
			</motion.div>
		</header>
	)
}
