import { Advantages, HhDataBlock, Htag, Tag } from '../../components'
import { TopPageComponentProps } from './TopPageComponent.props'

import styles from './TopPageComponent.module.css'
import { nanoid } from 'nanoid'
import { TopLevelCategory } from '../../interfaces/page.interface'

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m'>{products.length}</Tag>}
				<span>Сортировка</span>
			</div>

			<div>
				{products && products.map(product => (<div key={nanoid()}>{product.title}</div>))}
			</div>

			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>

			{firstCategory === TopLevelCategory.Courses && page.hh && <HhDataBlock {...page.hh}/>}
			{page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages}/>}
		</div>
	)
}
