import cn from 'classnames'
import { useContext } from 'react'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'
import { firstLevelMenu } from '../../helpers/helper'

import styles from './Menu.module.css'

export const Menu = (): JSX.Element => {
	const {menu, setMenu, firstCategory} = useContext(AppContext)
	const router = useRouter()

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: { marginBottom: 0 }
	}

	const variantsChildren = {
		visible: { 
			opacity: 1,
			height: 29
		},
		hidden: { 
			opacity: 0,
			height: 0
		}
	}

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory == secondCategory) {
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
									[styles.firstLevelActive]: firstLevelMenuItem.id == firstCategory
								})}>
									{firstLevelMenuItem.icon}
									<span>{firstLevelMenuItem.name}</span>
								</div>
							</a>
						</Link>
						{firstLevelMenuItem.id == firstCategory && buildSecondLevel(firstLevelMenuItem)}
					</div>
				))}
			</>
		)
	}

	const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
		return (
			<div className={styles.secondBlock}>
				{
					menu.map(secondLevelMenuItem => {
						if (secondLevelMenuItem.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
							secondLevelMenuItem.isOpened = true
						}

						return (
							<div key={nanoid()}>
								<div 
									className={styles.secondLevel} 
									onClick={() => openSecondLevel(secondLevelMenuItem._id.secondCategory)}
								>{secondLevelMenuItem._id.secondCategory}</div>
									
								<motion.div 
									className={styles.secondLevelBlock}
									layout
									variants={variants}
									initial={secondLevelMenuItem.isOpened ? 'visible' : 'hidden'}
									animate={secondLevelMenuItem.isOpened ? 'visible' : 'hidden'}
								>
									{buildThirdLevel(secondLevelMenuItem.pages, menuItem.route)}
								</motion.div>			
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
						<motion.div key={nanoid()} variants={variantsChildren}>
							<Link href={`/${route}/${page.alias}`}>
								<a className={cn(styles.thirdLevel, {
									[styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
								})}>
									{page.category}
								</a>
							</Link>
						</motion.div>
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
