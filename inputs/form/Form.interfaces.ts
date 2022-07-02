import { FormEventHandler, MouseEventHandler, ReactNode } from 'react'

export interface IForm {
	children?: ReactNode[] | ReactNode
	onSubmit?: FormEventHandler<HTMLFormElement>
	autoComplete?: string
	title?: string
	copy?: string
	variant?: string
}

export interface IFormSubmit {
	label?: ReactNode[] | ReactNode
	variant?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
}
