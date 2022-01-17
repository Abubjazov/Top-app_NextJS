import { Htag } from '../components'

export default function Home(): JSX.Element {
  return (
    <div>
        <Htag tag='h1'><span>Some</span> text</Htag>
        <Htag tag='h2'><span>Some</span> text</Htag>
        <Htag tag='h3'><span>Some</span> text</Htag>
    </div>
  )
}
