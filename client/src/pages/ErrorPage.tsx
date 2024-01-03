import { FC } from 'react'
import img from '../assets/not-found.png'
import { Link } from 'react-router-dom'
const ErrorPage: FC = () => {
	return (
		<div className="min-h-screen bg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-10">
			<img className="bg-inherit w-80" src={img} alt="img" />
			<Link className="rounded-sm bg-blue-500 px-4 py-2" to={'/'}>
				Back
			</Link>
		</div>
	)
}

export default ErrorPage
