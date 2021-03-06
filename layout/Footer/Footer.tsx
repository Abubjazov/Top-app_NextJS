import cn from 'classnames'
import { format } from 'date-fns'

import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'

export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href="https://github.com/Abubjazov" target="_blank" rel="noopener noreferrer">Пользовательское соглашение</a>
			<a href="https://github.com/Abubjazov" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
		</footer>
	)
}
