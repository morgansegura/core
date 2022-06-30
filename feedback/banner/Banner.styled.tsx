import styled, {css} from 'styled-components'
import * as style from '@styles/config/utilities'

export const Banner = styled.div`
	${props => console.log(props)}

	${props => props.color === 'rainbow' && css`
		background: rgb(131,58,180);
		background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
	` }
	${props => props.color === 'underwater' && css`
		background: rgb(2,0,36);
		background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
	` }
	${props => props.color === 'kiwimango' && css`
		background: rgb(34,193,195);
		background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
	` }
	${props => props.size === 'normal' && css`
	max-width: 275px;
	padding-top: ${style.sp['1.25']};
	padding-bottom: ${style.sp['1.25']};

	` }
	${props => props.size === 'narrow' && css`
	margin-top: 30px;

	` }
	${props => props.size === 'super' && css`
	margin-top: 30px;
	padding-top: 30px;
	padding-bottom: 30px;
	height: 200px;

	` }
`
export const Title = styled.div `
	font-size: 20x;
	text-align: center;
	padding-top: 10px;
`
export const Supertitle = styled.div `
	font-size: 20x;
	text-align: center;
	padding-top: 10px;
`
export const Copy = styled.div `
	font-size: 20x;
	text-align: center;
	padding-bottom: 10px;
`

