import cn from 'classnames'
import { useContext } from 'react'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'
import { firstLevelMenu } from '../../helpers/helper'

import styles from './Menu.module.css'



export const Menu = (): JSX.Element => {
	const {menu, setMenu, firstCategory} = useContext(AppContext)
	const router = useRouter()

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened
			}

			return m
		}))
	}

	const buildFirsLevel = (): JSX.Element => {
		return (
			<>
				{firstLevelMenu.map(firstLevelMenuItem => (
					<div key={nanoid()}>
						<Link href={`/${firstLevelMenuItem.route}`}>
							<a>
								<div className={ cn(styles.firstLevel, {
									[styles.firstLevelActive]: firstLevelMenuItem.id === firstCategory
								})}>
									{firstLevelMenuItem.icon}
									<span>{firstLevelMenuItem.name}</span>
								</div>
							</a>
						</Link>
						{firstLevelMenuItem.id === firstCategory && buildSecondLevel(firstLevelMenuItem)}
					</div>
				))}
			</>
		)
	}

	const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
		return (
			<div className={styles.secondBlock}>
				{
					menu.map((secondLevelMenuItem) => {
						return (
							<div key={nanoid()}>
								<div className={styles.secondLevel} onClick={() => openSecondLevel(secondLevelMenuItem._id.secondCategory)}>{secondLevelMenuItem._id.secondCategory}</div>
									
								<div className={cn(styles.secondLevelBlock, {
									[styles.secondLevelBlockOpened]: secondLevelMenuItem.isOpened
								})}>
									{buildThirdLevel(secondLevelMenuItem.pages, menuItem.route)}
								</div>			
							</div>
						)
					})
				}
			</div>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
		return (
			<>
				{
					pages.map(page => (
						<Link key={nanoid()} href={`/${route}/${page.alias}`}>
							<a className={cn(styles.thirdLevel, {
								[styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
							})}>
								{page.category}
							</a>
						</Link>
					))
				}
			</>
		)
	}

	return (
		<div className={styles.menu}>
			<ul>
				{buildFirsLevel()}
			</ul>
		</div>
	)
}
