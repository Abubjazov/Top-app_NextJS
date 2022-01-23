import cn from 'classnames'
import { ReactChild, ReactFragment, ReactPortal, useContext } from 'react'
import { nanoid } from 'nanoid'
import Link from 'next/link'

import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'
import { TopLevelCategory } from '../../interfaces/page.interface'

import CoursesIcon from './icons/Courses.svg'
import ServicesIcon from './icons/Services.svg'
import GoodsIcon from './icons/Goods.svg'
import BooksIcon from './icons/Books.svg'

import styles from './Menu.module.css'
import { useRouter } from 'next/router'



const firstLevelMenu: FirstLevelMenuItem[] = [
	{route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
	{route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
	{route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
	{route: 'products', name: 'Товары', icon: <GoodsIcon />, id: TopLevelCategory.Products},
]

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

						// if (secondLevelMenuItem.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
						// 	secondLevelMenuItem.isOpened = true
						// }

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
