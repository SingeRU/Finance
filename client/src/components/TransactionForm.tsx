import { FC, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { IResponseTransactionLoader } from '../types/types'
import CategoryModal from './CategoryModal'

const TransactionForm: FC = () => {
	const { categories } = useLoaderData() as IResponseTransactionLoader
	const [visibleModal, setVisibleModal] = useState(false)
	return (
		<div className="rounded-md bg-slate-800 p-4">
			<Form className="grid gap-2" method="post" action="/transactions">
				<label className="grid" htmlFor="title">
					<span>Title</span>
					<input
						type="text"
						name="title"
						className="input"
						placeholder="Title..."
						required
					/>
				</label>
				<label className="grid" htmlFor="amount">
					<span>Amount</span>
					<input
						type="number"
						name="amount"
						className="input"
						placeholder="Amount..."
						required
					/>
				</label>

				{/* Select */}

				{categories.length ? (
					<label htmlFor="category">
						<span>Category</span>
						<select
							className="input border-slate-700 w-full"
							name="category"
							required
						>
							{categories.map((category, index) => (
								<option key={index} value={category.id}>
									{category.title}
								</option>
							))}
						</select>
					</label>
				) : (
					<h1 className="text-red-700 text-lg">
						To continue create a category!
					</h1>
				)}

				{/* Add Category */}
				<button
					onClick={() => setVisibleModal(true)}
					className="max-w-fit flex items-center gap-2 text-white/50 hover:text-white"
				>
					<span className="flex items-center justify-center gap-1">
						<FaPlus />
						Manage Categories:
					</span>
				</button>

				{/* Radio Buttons */}
				<div className="flex gap-4 items-center">
					<label
						className="flex cursor-pointer items-center gap-2"
						htmlFor="type"
					>
						<input
							type="radio"
							name="type"
							value={'income'}
							className="form-radio text-blue-600"
						/>
						<span>Income</span>
					</label>
					<label
						className="flex cursor-pointer items-center gap-2"
						htmlFor="type"
					>
						<input
							type="radio"
							name="type"
							value={'expense'}
							className="form-radio text-blue-600"
						/>
						<span>Expense</span>
					</label>
				</div>

				{/* Submit Button */}
				<button className="btn bg-green-600 w-fit">Submit</button>
			</Form>
			{visibleModal && (
				<CategoryModal
					type="post"
					setIsEdit={() => {}}
					setVisibleModal={setVisibleModal}
				/>
			)}
		</div>
	)
}

export default TransactionForm
