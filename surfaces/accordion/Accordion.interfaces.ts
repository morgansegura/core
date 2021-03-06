import { MouseEventHandler, ReactNode } from 'react'

export type TAccordionTab = {
	key?: string | number
	title?: ReactNode[] | ReactNode
	content?: ReactNode[] | ReactNode
	titleIcon?: ReactNode[] | ReactNode
	actionIcon?: ReactNode[] | ReactNode | any
	onClick?: MouseEventHandler<HTMLDivElement>
	open?: boolean
	close?: boolean
}

export type TAccordionContent = {
	key?: string | number
	open?: boolean
	close?: boolean
	data?: ReactNode[] | ReactNode
	map?: any
}

export type TAccordionItem = {
	key?: string | number
	tab?: TAccordionTab | TAccordionTab[]
	content?: TAccordionContent | TAccordionContent[]
}

export interface IAccordionContext {
	key?: string
	onClick?: MouseEventHandler<HTMLDivElement>
	open?: boolean
	close?: boolean
	items?: TAccordionItem[]
}

export interface IAccordion {
	children?: ReactNode[] | ReactNode
	open?: boolean
	close?: boolean
}

export interface IAccordionProvider {
	children?: ReactNode[] | ReactNode
}

export interface IAccordionTrigger {
	children?: ReactNode[] | ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement>
	open?: boolean
	close?: boolean
	ref?: any
}
