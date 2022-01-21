import cn from 'classnames'

import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'

export const Ptag = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
		<Header />
		<div>
			<SideBar />
			<div>
				{children}
			</div>
		</div>
		<Footer />
		</>
	)
}
