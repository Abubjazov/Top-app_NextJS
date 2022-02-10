import { Htag } from '../components'
import { withLayout } from '../HOC/withLayout'

export function Error404(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>ОШИБКА 404</Htag>			
		</>
	)
}

export default withLayout(Error404)
