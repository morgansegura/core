import { MouseEventHandler, ReactNode } from 'react'

export interface IDialog {
	open?: boolean
	close?: boolean
	closeIcon?: ReactNode[] | ReactNode
	content?: ReactNode[] | ReactNode
	title?: ReactNode[] | ReactNode
	direction?: string
	menu?: ReactNode[] | ReactNode
}

export interface IDialogContainer {
	children?: ReactNode[] | ReactNode
	open?: boolean
	close?: boolean
}

export interface IDialogProvider {
	children?: ReactNode[] | ReactNode
}

export interface IDialogTrigger {
	children?: ReactNode[] | ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement>
	open?: boolean
	close?: boolean
}

export interface IDialogClose {
	children?: ReactNode[] | ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement>
	open?: boolean
	close?: boolean
}
