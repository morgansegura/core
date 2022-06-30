import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
// [Interfaces]
import { IAvatar } from './Avatar.interfaces'

export const Avatar = styled.div<IAvatar>`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
	}
	svg {
		display: flex;
	}
	background-color: ${props =>
		props.color && props.color.includes(style.colors)
			? style.colors[props.color]
			: props.theme.palette.name == 'light'
			? style.colors.neutral09
			: style.colors.neutral09};
	${props => props.size && props.size}
	${props =>
		props.variant && props.variant === 'rounded-xs'
			? css`
					border-radius: ${style.radius['md']};
			  `
			: props.variant === 'rounded-xs'
			? css`
					border-radius: 0;
			  `
			: props.variant === 'rounded-xs'
			? css`
					border-radius: 0;
			  `
			: props.variant === 'rounded-xs'
			? css`
					border-radius: 0;
			  `
			: props.variant === 'rounded-xs'
			? css`
					border-radius: 0;
			  `
			: props.variant === 'rounded-xs'
			? css`
					border-radius: 0;
			  `
			: css`
					border-radius: ${style.radius.circle};
			  `}
`
