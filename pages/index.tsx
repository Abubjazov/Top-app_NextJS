import { Button, Htag, Ptag } from '../components'

export default function Home(): JSX.Element {
  return (
    <>
        <Htag tag='h1'><span>Some</span> text</Htag>
        <Htag tag='h2'><span>Some</span> text</Htag>
        <Htag tag='h3'><span>Some</span> text</Htag>
        <Button appearance='primary' className='arr13' arrow='down'>Primary</Button>
        <Button appearance='ghost' arrow='right'>Ghost</Button>
        <Ptag 
          fontSz='s' 
          innerText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi vitae ea, eligendi sit inventore, sequi quae ab dolor maxime quod vero alias architecto. Minus similique quae porro, perspiciatis vero dolorum!' />
    </>
  )
}
