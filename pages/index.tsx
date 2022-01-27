import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import axios from 'axios'

import { Button, Htag, Input, Ptag, Rating, Tag, Textarea } from '../components'

import { MenuItem } from '../interfaces/menu.interface'
import { withLayout } from '../HOC/withLayout'
import { API } from '../helpers/api'

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4)

	return (
		<>
			<Htag tag='h1'>Заголовок</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Green</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<Input placeholder='1111'/>
			<Textarea placeholder='2222' />
		</>
	);
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[]
	firstCategory: number
}
