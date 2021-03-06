import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba, rem } from 'polished'
import { IFormSubmit } from './Form.interfaces'

// import { FormProps } from '@config/interfaces'

export const Form = styled.form`
	/* ${style.container.xs}; */
	display: flex;
	flex-direction: column;
	margin-right: auto;
	margin-left: auto;
`

export const FormTitle = styled.h2`
	display: flex;
	justify-content: center;
	${style.fontSizing('36px', '48px', 700)}

	${style.media.lg`
		${style.fontSizing('32px', '60px', 700)}
	`}
`

export const FormCopy = styled.h3`
	display: flex;
	justify-content: center;
	margin-top: -${rem('40px')};
	${style.fontSizing('16px', '60px', 600)}

	${style.media.lg`
		margin-top: -${rem('45px')};
		${style.fontSizing('18px', '60px', 600)}
	`}
`

export const FormSubmitBlock = styled.div`
	display: flex;
	justify-content: center;
	margin-top: ${style.sp['2']};
`

export const FormSubmit = styled.button<IFormSubmit>`
	position: relative;
	display: flex;
	z-index: 2px;
	flex: 1 0 auto;
	align-items: center;
	justify-content: center;
	${style.fontSizing('14px', '60px', 700)};
	padding-right: ${style.sp['4']};
	padding-left: ${style.sp['4']};
	overflow: hidden;
	border-radius: ${style.radius.md};
	border-color: transparent;
	border-width: 0;
	text-transform: uppercase;

	transition: all 0.3s ease-out;
`

export const FormAltMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: ${style.sp['3']};
	${style.fontSizing('18px', '30px', 600)};

	a {
		border-radius: ${style.radius.md};
		margin-left: ${style.sp['2']};
		padding-right: ${style.sp['1.5']};
		padding-left: ${style.sp['1.5']};
		${style.fontSizing('14px', '34px', 600)};
		background-color: transparent;
		border: 1px solid transparent;
		transition: all 0.3s ease-out;
	}
`

export const ForgotPassword = styled(FormAltMessage)`
	margin-top: unset;
`
