import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba, rem } from 'polished'
import { IInput, ITextField } from './TextField.interfaces'

export const Placeholder = styled.div`
	position: absolute;
	z-index: ${style.zindex['2']};
	${style.fontSizing('16px', '40px', 500)};
	left: ${style.sp[3.5]};

	.focus & {
		color: transparent;
	}
	.blur & {
	}
	.error & {
	}

	transition: all 0.3s ease-out;
`
export const Label = styled.div`
	position: absolute;
	z-index: 1;
	display: inline-flex;
	top: ${rem('13px')};
	opacity: 0;
	right: ${style.sp[2]};
	padding-right: ${style.sp['1']};
	padding-left: ${style.sp['1']};
	border-radius: ${style.radius.md};
	${style.fontSizing('12px', '28px', 600)};

	.focus & {
		opacity: 1;
	}
	.blur & {
		opacity: 0;
	}
	.error & {
	}

	transition: opacity 0.3s ease-out;
`

export const Input = styled.input<IInput>`
	position: relative;
	padding: ${style.sp['2']};
	z-index: ${style.zindex['2']};
	display: flex;
	user-select: none;
	flex: 1 0 auto;
	border: inherit;
	outline: inherit;
	background-color: transparent;
	border-radius: ${style.radius.sm};

	${style.fontSizing('16px', '30px', 500)};

	border: 1px solid transparent;
	transition: all 0.3s ease-out;

	&:-internal-autofill-selected {
		appearance: none !important;
		background-color: inherit !important;
		color: inherit !important;
	}

	&:hover {
		outline: inherit;
	}

	${props => props.blur && ``}
	${props => props.focus && ``}
	${props => props.error && css``}
`

export const TextFieldControl = styled.div`
	/* margin-top: ${style.sp['1.5']}; */
	margin-bottom: ${style.sp['1.5']};

	&.light,
	.light & {
	}
	&.dark,
	.dark & {
	}
`

export const TextFieldWarning = styled.div`
	position: relative;
	top: -${style.sp[1.5]};
	${style.fontSizing('14px', '30px')};

	&::first-letter {
		text-transform: uppercase;
	}
`

export const TextField = styled.div<ITextField>`
	position: relative;
	z-index: ${style.zindex['1']};
	display: flex;
	align-items: center;
	/* margin-top: ${style.sp['1']}; */
`
