import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'

// [Interfaces]
import { IBackdrop } from './Backdrop.interfaces'

export const Backdrop = styled.div<IBackdrop>`
	position: fixed;
	overflow: hidden;
	opacity: 0;
	visibility: visible;
	z-index: ${style.zindex.bottom};
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	user-select: none;
	transform-origin: 50% 50%;
	transition: all 0.3s ease-out;

	&.open {
		z-index: ${style.zindex.high};
		opacity: 1;
		visibility: visible;
		transition: all 0.3s ease-in;
	}

	&.close {
		z-index: ${style.zindex.bottom};
		visibility: hidden;
		opacity: 0;
		transition: all 0.9s ease-out;
	}
`
