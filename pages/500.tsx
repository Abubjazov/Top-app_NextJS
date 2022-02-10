import { Htag } from '../components'
import { withLayout } from '../HOC/withLayout'

function Error500(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>ОШИБКА 500</Htag>			
		</>
	)
}

export default withLayout(Error500)
