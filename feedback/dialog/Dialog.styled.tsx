import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
// [TS]

import { IDialog, IDialogClose, IDialogTrigger, IDialogContainer } from './Dialog.interfaces'

export const Dialog = styled.div<IDialog>`
	position: relative;
	opacity: 0;
	visiblity: hidden;
	z-index: ${style.zindex.bottom};
	transition: all 0.3s ease-out;

	&.open {
		opacity: 1;
		z-index: ${style.zindex.top};
	}

	&.closed {
		opacity: 0;
		visiblity: hidden;
		z-index: ${style.zindex.bottom};
	}
`
export const DialogContainer = styled.div<IDialogContainer>`
	position: fixed;
	top: 30%;
	left: 50%;
	padding: ${style.sp['13']};
	border-radius: ${style.radius.lg};
	min-width: 33%;
	transform: translateY(-30%) translateX(-50%);
	box-shadow: 0 0 20px
			${props =>
				props.theme.palette.name === 'light'
					? rgba(style.colors.neutral80, 0.125)
					: rgba(style.colors.neutral80, 0.125)},
		0 0 40px
			${props =>
				props.theme.palette.name === 'light'
					? rgba(style.colors.neutral80, 0.125)
					: rgba(style.colors.neutral80, 0.125)};
	background-color: ${props =>
		props.theme.palette.name === 'light' ? style.colors.neutral00 : style.colors.neutral00};
`
export const DialogTrigger = styled.div<IDialogTrigger>`
	position: relative;
	display: flex;
	padding: 10px;
	z-index: ${style.zindex['1']};
	background-color: red;
`
export const DialogClose = styled.div<IDialogClose>``
