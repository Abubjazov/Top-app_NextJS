import cn from 'classnames'
import Link from 'next/link'
import { useContext, KeyboardEvent, useState } from 'react'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import { motion, useReducedMotion } from 'framer-motion'

import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'
import { firstLevelMenu } from '../../helpers/helper'

import styles from './Menu.module.css'

export const Menu = (): JSX.Element => {
	const {menu, setMenu, firstCategory} = useContext(AppContext)
	const shouldReduceMotion = useReducedMotion()
	const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>()
	const router = useRouter()

	const variants = {
		visible: {
			marginBottom: 20,
			transition: shouldReduceMotion ? {} : {
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
			opacity: shouldReduceMotion ? 1 : 0,
			height: 0
		}
	}

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory == secondCategory) {
				setAnnounce(m.isOpened ? 'closed' : 'opened')
				m.isOpened = !m.isOpened
			}

			return m
		}))
	}

	const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
		if (key.code === 'Enter' || key.code === 'Space') {
			key.preventDefault()
			openSecondLevel(secondCategory)
		}
	}

	const buildFirsLevel = (): JSX.Element => {
		return (
			<ul className={styles.firstLevelList} >
				{firstLevelMenu.map(firstLevelMenuItem => (
					<li key={nanoid()} aria-expended={firstLevelMenuItem.id == firstCategory}>
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
					</li>
				))}
			</ul>
		)
	}

	const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
		return (
			<ul className={styles.secondBlock}>
				{
					menu.map(secondLevelMenuItem => {
						if (secondLevelMenuItem.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
							secondLevelMenuItem.isOpened = true
						}

						return (
							<li key={nanoid()}>
								<button 
									onKeyDown={(key: KeyboardEvent ) => openSecondLevelKey(key, secondLevelMenuItem._id.secondCategory)}
									className={styles.secondLevel} 
									onClick={() => openSecondLevel(secondLevelMenuItem._id.secondCategory)}
									aria-expended={secondLevelMenuItem.isOpened}
								>
									{secondLevelMenuItem._id.secondCategory}
								</button>
									
								<motion.ul 
									className={styles.secondLevelBlock}
									layout
									variants={variants}
									initial={secondLevelMenuItem.isOpened ? 'visible' : 'hidden'}
									animate={secondLevelMenuItem.isOpened ? 'visible' : 'hidden'}
								>
									{buildThirdLevel(secondLevelMenuItem.pages, menuItem.route, secondLevelMenuItem.isOpened = false)}
								</motion.ul>			
							</li>
						)
					})
				}
			</ul>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean): JSX.Element[] => {
		return (			
			pages.map(page => (
				<motion.li key={nanoid()} variants={variantsChildren}>
					<Link href={`/${route}/${page.alias}`}>
						<a 
							tabIndex={isOpened ? 0 : -1}
							className={cn(styles.thirdLevel, {
								[styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
							})}
							aria-current={`/${route}/${page.alias}` == router.asPath ? 'page' : false}
						>
							{page.category}
						</a>
					</Link>
				</motion.li>
			))
		)
	}

	return (
		<nav className={styles.menu} role='navigation'>
			{announce && <span className='visualyHidden' role={'log'}>{announce === 'opened' ? 'развёрнуто' : 'cвёрнуто'}</span>}
			{buildFirsLevel()}
		</nav>
	)
}
