import cn from 'classnames'
import { Card } from '..'

import styles from './HhDataBlock.module.css'
import { HhDataBlockProps } from './HhDataBlock.props'

export const HhDataBlock = ({ count }:HhDataBlockProps): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.card}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.count}>{count}</div>
			</Card>
		</div>
	)
}
