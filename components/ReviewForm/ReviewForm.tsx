import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import cn from 'classnames'

import { Button, Input, Rating, Textarea } from '..'

import { IReviewForm } from '../../interfaces/review.interface'
import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'

import CrossIcon from './cross.svg'


export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>()

	const onSubmit: SubmitHandler<IReviewForm> = data => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)}
				{...props}
			>
				<Input 
					{...register("name", {required: {value: true, message: 'Пожалуйста укажите ваше имя'}})}
					placeholder='Имя'
					error={errors.name}
				/>
				<Input 
					{...register('title', {required: {value: true, message: 'Пожалуйста укажите заголовок'}})} 
					placeholder='Заголовок отзыва'
					error={errors.title}
				/>

				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{required: {value: true, message: 'Укажите рейтинг'}}}
						render={({ field }) => (
							<Rating 
								isEditable 
								rating={field.value} 
								ref={field.ref} 
								setRating={field.onChange} 
								error={errors.rating}
							/>
						)}
					/>
				</div>			

				<Textarea 
					{...register('description', {required: {value: true, message: 'Пожалуйста введите текст'}})} 
					className={styles.description} 
					placeholder='Текст отзыва'
					error={errors.description}
				/>			

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
