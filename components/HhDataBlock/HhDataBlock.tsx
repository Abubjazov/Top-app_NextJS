import cn from 'classnames'
import { Card } from '..'

import styles from './HhDataBlock.module.css'
import { HhDataBlockProps } from './HhDataBlock.props'

import RateIcon from './rateStar.svg'

export const HhDataBlock = ({ count, juniorSalary, middleSalary, seniorSalary }:HhDataBlockProps): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>

			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Начальный</div>
					<div className={styles.salaryValue}>{juniorSalary}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled}/>
						<RateIcon />
						<RateIcon />
					</div>
				</div>

				<div>
					<div className={styles.title}>Средний</div>
					<div className={styles.salaryValue}>{middleSalary}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled}/>
						<RateIcon className={styles.filled}/>
						<RateIcon />
					</div>
				</div>

				<div>
					<div className={styles.title}>Профессионал</div>
					<div className={styles.salaryValue}>{seniorSalary}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled}/>
						<RateIcon className={styles.filled}/>
						<RateIcon className={styles.filled}/>
					</div>
				</div>
			</Card>
		</div>
	)
}
