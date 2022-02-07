import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import cn from 'classnames'
import axios from 'axios'

import { Button, Input, Rating, Textarea } from '..'
import { API } from '../../helpers/api'

import { IReviewForm, IReviewSentResponse } from '../../interfaces/review.interface'
import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'

import CrossIcon from './cross.svg'
import { useState } from 'react'

export const ReviewForm = ({ productId, className, isOpened, ...props }: ReviewFormProps): JSX.Element => {
	const [successSend, setSuccessSend ] = useState<boolean>(false)
	const [errorSend, setErrorSend ] = useState<string>('')
	const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>()

	const onSubmit: SubmitHandler<IReviewForm> = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
				...formData, 
				productId
			})

			if (data.message) {
				setSuccessSend(true)
				reset()
			} else {
				setErrorSend(API.messages.errorMsg)
			} 
		} catch {
			setErrorSend(API.messages.errorMsg) 
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)}
				{...props}
			>
				<Input 
					{...register("name", {required: {value: true, message: 'Пожалуйста укажите ваше имя'}})}
					placeholder='Имя'
					error={errors.name}
					tabIndex={isOpened ? 0: -1}
				/>
				<Input 
					{...register('title', {required: {value: true, message: 'Пожалуйста укажите заголовок'}})} 
					placeholder='Заголовок отзыва'
					error={errors.title}
					tabIndex={isOpened ? 0: -1}
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
								tabIndex={isOpened ? 0: -1}
							/>
						)}
					/>
				</div>			

				<Textarea 
					{...register('description', {required: {value: true, message: 'Пожалуйста введите текст'}})} 
					className={styles.description} 
					placeholder='Текст отзыва'
					error={errors.description}
					tabIndex={isOpened ? 0: -1}
				/>			

				<div className={styles.submit}>
					<Button appearance={'primary'}>Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>

			{successSend && <div className={cn( styles.successPannel, styles.success )}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, ваш отзыв будет опубликован после премодерации.
				</div>
				<CrossIcon className={styles.cross} onClick={() => setSuccessSend(false)}/>
			</div>}

			{errorSend && <div className={cn(styles.error, styles.successPannel)}>
				<div className={styles.successTitle}>Ваш отзыв НЕ отправлен</div>
				<div>
					{API.messages.errorMsg}
				</div>
				<CrossIcon className={styles.cross} onClick={() => setErrorSend('')}/>
			</div>}
		</form>	
	)
}
