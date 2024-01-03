export interface IUser {
	id: number
	email: string
	token: string
}

export interface IUserData {
	email: string
	password: string
}

export interface IResponseUser {
	email: string
	id: number
	createdAt: string
	updatedAt: string
	password: string
}

export interface IResponseUserData {
	token: string
	user: IResponseUser
}

export interface ICategory {
	id: number
	title: string
	transactions: []
	createdAt: string
	updatedAt: string
}

export interface ITransaction {
	id: number
	title: string
	type: string
	amount: number
	category: ICategory
	createdAt: string
	updatedAt: string
}

export interface IResponseTransactionLoader {
	categories: ICategory[]
	transactions: ITransaction[]
	totalIncome: number
	totalExpense: number
}
