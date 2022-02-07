import { GetStaticProps } from 'next'
import React from 'react'
import axios from 'axios'

import { Htag } from '../components'

import { MenuItem } from '../interfaces/menu.interface'
import { withLayout } from '../HOC/withLayout'
import { API } from '../helpers/api'

function Home({ menu }: HomeProps): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Заголовок</Htag>			
		</>
	)
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 1
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	})

	return {
		props: {
			menu,
			firstCategory
		}
	}
}

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[]
	firstCategory: number
}
