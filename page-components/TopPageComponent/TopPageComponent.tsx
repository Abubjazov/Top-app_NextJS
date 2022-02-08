import { nanoid } from 'nanoid'

import { TopLevelCategory } from '../../interfaces/page.interface'
import { SortEnum } from '../../components/Sort/Sort.props'
import { useEffect, useReducer } from 'react'
import { sortReducer } from '../../components/Sort/sort.reducer'
import { Advantages, HhDataBlock, Htag, Product, Sort, Tag } from '../../components'

import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating})

	const setSort = (sort: SortEnum): void => {
		dispatchSort({type: sort})
	}

	useEffect(() => {
		dispatchSort({type: 'reset', initialState: products})
	}, [products])

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m' aria-label={'всего курсов найдено ' + products.length}>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>

			<div>
				{sortedProducts && sortedProducts.map(product => (<Product layout key={nanoid()} product={product} />))}
			</div>

			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>

			{firstCategory === TopLevelCategory.Courses && page.hh && <HhDataBlock {...page.hh}/>}
			{page.advantages && page.advantages[0]?.title.length > 0 && <Advantages advantages={page.advantages}/>}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText}}/>}

			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(tag => <Tag key={nanoid()} color='primary'>{tag}</Tag>)}
		</div>
	)
}
