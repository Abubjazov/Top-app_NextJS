import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import cn from 'classnames'

import { Button, Input, Rating, Textarea } from '..'

import { IReviewForm } from '../../interfaces/review.interface'
import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'

import CrossIcon from './cross.svg'


export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit } = useForm<IReviewForm>()

	const onSubmit: SubmitHandler<IReviewForm> = data => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)}
				{...props}
			>
				<Input {...register("name")} placeholder='Имя'/>
				<Input {...register('title')} placeholder='Заголовок отзыва'/>

				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						render={({ field }) => (
							<Rating rating={field.value} isEditable setRating={field.onChange} />
						)}		
					/>
				</div>			

				<Textarea {...register('description')} className={styles.description} placeholder='Текст отзыва'/>			

				<div className={styles.submit}>
					<Button appearance={'primary'}>Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>

			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, ваш отзыв будет опубликован после премодерации.
				</div>
				<CrossIcon className={styles.successCross}/>
			</div>
		</form>	
	)
}