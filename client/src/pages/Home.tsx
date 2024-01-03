import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
	return (
		<div className="container flex flex-col gap-3 justify-center items-center w-full translate-y-2/4">
			<h1 className="text-bold text-3xl">Lets check our Transactions!</h1>
			<Link to={'/transactions'} className="btn btn-green">
				Transactions
			</Link>
		</div>
	)
}

export default Home
