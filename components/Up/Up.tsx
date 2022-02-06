import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { useScrollY } from '../../hooks/useScrollY'


import styles from './Up.module.css'
import { IButton } from '../IButton/IButton'

export const Up = (): JSX.Element => {
	const control = useAnimation()
	const y = useScrollY()

	useEffect(() => {
		control.start({opacity: y / document.body.scrollHeight})
	}, [y, control])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<motion.div 
			className={styles.up} 
			animate={control}
			initial={{opacity: 0}}
		>
			<IButton
				appearance='primary' 
				icon='RowIcon'
				onClick={scrollToTop}
			/>
		</motion.div>
	)
}