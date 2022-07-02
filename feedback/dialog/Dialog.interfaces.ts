import { MouseEventHandler, ReactNode } from 'react'

export type TDialog = {
	open?: boolean
	close?: boolean
}
export interface IDialog {
	toggle?: TDialog
	closeIcon?: ReactNode[] | ReactNode
	content?: ReactNode[] | ReactNode
	title?: ReactNode[] | ReactNode
	direction?: string
	menu?: ReactNode[] | ReactNode
	setToggle?: any
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
