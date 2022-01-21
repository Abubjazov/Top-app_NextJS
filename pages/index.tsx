import { useState } from 'react'
import { Button, Htag, Ptag, Rating, Tag } from '../components'

export default function Home(): JSX.Element {
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
    </>
  )
}
