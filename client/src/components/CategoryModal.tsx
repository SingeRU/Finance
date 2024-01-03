import { FC } from 'react'
import { Form } from 'react-router-dom'

interface Props {
	type: 'post' | 'patch'
	id?: number
	setVisibleModal: (visible: boolean) => void
	setIsEdit: (isEdit: boolean) => void
}

const CategoryModal: FC<Props> = ({ type, id, setVisibleModal, setIsEdit }) => {
	return (
		<div className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-black/50">
			<Form
				action="/categories"
				method={type}
				onSubmit={() => {
					setVisibleModal(false)
					setIsEdit(false)
				}}
				className="grid gap-2 w-[300px] p-5 rounded-md bg-slate-900"
			>
				<label htmlFor="title">
					<small>Category Title</small>
					<input
						type="text"
						className="input w-full"
						name="title"
						placeholder="Title..."
					/>
					<input type="hidden" name="id" value={id} />
				</label>

				<div className="flex items-center justify-between">
					<button className="btn btn-green" type="submit">
						{type === 'patch' ? 'Save' : 'Create'}
					</button>
					<button
						onClick={() => {
							setVisibleModal(false)
							setIsEdit(false)
						}}
						className="btn btn-red"
					>
						Close
					</button>
				</div>
			</Form>
		</div>
	)
}

export default CategoryModal
