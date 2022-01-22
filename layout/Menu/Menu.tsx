import cn from 'classnames'
import { format } from 'date-fns'
import { useContext } from 'react'
import { AppContext } from '../../context/app.context'

import styles from './Menu.module.css'

export const Menu = (): JSX.Element => {
	const {menu, setMenu, firstCategory} = useContext(AppContext)

	return (
		<div>
			<ul>
				{menu.map(mElem => (<li key={mElem._id.secondCategory}>{mElem._id.secondCategory}</li>))}
			</ul>
		</div>
	)
}
