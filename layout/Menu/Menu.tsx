import cn from 'classnames'
import { ReactChild, ReactFragment, ReactPortal, useContext } from 'react'
import { nanoid } from 'nanoid'

import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'
import { TopLevelCategory } from '../../interfaces/page.interface'

import CoursesIcon from './icons/Courses.svg'
import ServicesIcon from './icons/Services.svg'
import GoodsIcon from './icons/Goods.svg'
import BooksIcon from './icons/Books.svg'

import styles from './Menu.module.css'


const firstLevelMenu: FirstLevelMenuItem[] = [
	{route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
	{route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
	{route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
	{route: 'products', name: 'Товары', icon: <GoodsIcon />, id: TopLevelCategory.Products},
]

export const Menu = (): JSX.Element => {
	const {menu, setMenu, firstCategory} = useContext(AppContext)

	const buildFirsLevel = (): JSX.Element => {
		return (
			<>
				{firstLevelMenu.map(firstLevelMenuItem => (
					<div key={nanoid()}>
						<a href={`/${firstLevelMenuItem.route}`}>
							<div className={ cn(styles.firstLevel, {
								[styles.firstLevelActive]: firstLevelMenuItem.id === firstCategory
							})}>
								{firstLevelMenuItem.icon}
								<span>{firstLevelMenuItem.name}</span>
							</div>
						</a>
						{firstLevelMenuItem.id === firstCategory && buildSecondLevel(firstLevelMenuItem)}
					</div>
				))}
			</>
		)
	}

	const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
		return (
			<div className={styles.secondBlock}>
				{menu.map((secondLevelMenuItem) => (
					<div key={nanoid()}>
						<div className={styles.secondLevel}>{secondLevelMenuItem._id.secondCategory}</div>
							
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: secondLevelMenuItem.isOpened
						})}>
							{buildThirdLevel(secondLevelMenuItem.pages, menuItem.route)}
						</div>			
					</div>
				))}				
			</div>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
		return (
			<>
				{
					pages.map(page => (
						<a key={nanoid()} href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
							[styles.thirdLevelActive]: false
						})}>
							{page.category}
						</a>
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
