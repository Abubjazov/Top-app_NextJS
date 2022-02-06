import cn from 'classnames'

import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

import Logo from '../logo.svg' 
import { IButton } from '../../components'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header 
			className={cn(className, styles.header)} 
			{...props}
		>
			<Logo />
			<IButton appearance='white' icon='MenuIcon'/>
		</header>
	)
}
