import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
// [TS]

import { IDialog, IDialogClose, IDialogTrigger, IDialogContainer } from './Dialog.interfaces'

export const Dialog = styled.div<IDialog>`
	position: relative;
	opacity: 0;
	z-index: ${style.zindex.bottom};
	transition: all 0.3s ease-out;

	&.open {
		opacity: 1;
		z-index: ${style.zindex.top};
	}

	&.closed {
		opacity: 0;
		z-index: ${style.zindex.bottom};
	}
`
export const DialogContainer = styled.div<IDialogContainer>`
	position: fixed;
	top: 30%;
	left: 50%;
	padding: ${style.sp['13']} ${style.sp['10']};
	border-radius: ${style.radius.lg};
	opacity: 0;
	z-index: ${style.zindex.bottom};
	width: 100%;
	${style.container['xs']};
	transform: translateY(-30%) translateX(-50%);
	transition: all 0.3s ease-out;

	&.open {
		opacity: 1;
		z-index: ${style.zindex.top};
	}

	&.closed {
		opacity: 0;
		z-index: ${style.zindex.bottom};
	}
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
`
export const DialogTrigger = styled.div<IDialogTrigger>`
	position: relative;
	display: flex;
	z-index: ${style.zindex['1']};
`
export const DialogClose = styled.div<IDialogClose>`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	top: ${style.sp['2']};
	right: ${style.sp['2']};
	width: 35px;
	height: 35px;

	svg {
		font-size: 20px;
	}

	&::after {
		content: '';
		z-index: -1;
		position: absolute;
		border-radius: ${style.radius.circle};
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		transition: background-color 0.3s ease-out;
	}
`
