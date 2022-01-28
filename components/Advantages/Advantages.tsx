import { nanoid } from 'nanoid'

import styles from './Advantages.module.css'
import { AdvantagesProps } from './Advantages.props'
import { Htag } from '..'

import AdvantageIcon from './advantage.svg'

export const Advantages = ({ advantages }:AdvantagesProps): JSX.Element => {
	return (
		<>
			<Htag tag='h2'>Преимущества</Htag>
			{advantages.map(adv => (
				<div key={nanoid()} className={styles.advantages}>
					<AdvantageIcon />
					<div className={styles.title}>{adv.title}</div>
					{adv.description && <>
						<hr className={styles.vline}/>
						<div className={styles.description}>{adv.description}</div>
					</>}
				</div>
			))}
		</>
	)
}
