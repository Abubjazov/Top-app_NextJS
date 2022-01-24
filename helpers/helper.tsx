import { TopLevelCategory } from '../interfaces/page.interface'
import { FirstLevelMenuItem } from '../interfaces/menu.interface'

import CoursesIcon from './icons/Courses.svg'
import ServicesIcon from './icons/Services.svg'
import GoodsIcon from './icons/Goods.svg'
import BooksIcon from './icons/Books.svg'

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
	{route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
	{route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
	{route: 'products', name: 'Товары', icon: <GoodsIcon />, id: TopLevelCategory.Products},
]

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽')
