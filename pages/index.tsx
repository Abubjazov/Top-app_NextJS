import { Button, Htag } from '../components'

export default function Home(): JSX.Element {
  return (
    <>
        <Htag tag='h1'><span>Some</span> text</Htag>
        <Htag tag='h2'><span>Some</span> text</Htag>
        <Htag tag='h3'><span>Some</span> text</Htag>
        <Button appearance='primary' className='arr13'>Primary</Button>
        <Button appearance='ghost'>Ghost</Button>
    </>
  )
}
