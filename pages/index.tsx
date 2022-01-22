import { GetStaticProps } from 'next'
import { useState } from 'react'
import axios from 'axios'

import { Button, Htag, Ptag, Rating, Tag } from '../components'
import { withLayout } from '../HOC/withLayout'
import { MenuItem } from '../interfaces/menu.interface'
import { HomeProps } from '../interfaces/homeProps.interface'

function Home({menu}: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(0)

  return (
    <>
        <Htag tag='h1'><span>{rating}</span> text</Htag>
        <Htag tag='h2'><span>Some</span> text</Htag>
        <Htag tag='h3'><span>Some</span> text</Htag>
        <Button 
          appearance='primary' 
          className='arr13' 
          arrow='down'
        >Primary</Button>
        <Button appearance='ghost' arrow='right'>Ghost</Button>
        <Ptag fontSz='s'>'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi vitae ea, eligendi sit inventore, sequi quae ab dolor maxime quod vero alias architecto. Minus similique quae porro, perspiciatis vero dolorum!'</Ptag>

        <Tag size='m' color='primary' href='https://html5book.ru/'>Text</Tag>
        <Tag size='m' color='ghost' href='https://html5book.ru/'>Text</Tag>
        <Tag size='s' color='green'>Text</Tag>
        <Tag size='s' color='red'>Text</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating}/>
        {menu.map(mElem => (<li key={mElem._id.secondCategory}>{mElem._id.secondCategory}</li>))}
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })

  return {
    props: {
      menu,
      firstCategory
    }
  }
}
