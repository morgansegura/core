import { createContext, FC, useContext, useEffect, useRef, useState } from 'react'

// [Core]
import { Backdrop } from '@core/feedback/backdrop'
// [Interfaces]
import { IDialog } from './Dialog.interfaces'
// [Styles]
import * as s from './Dialog.styled'

const Dialog: FC<IDialog> = ({ content, title, closeIcon, direction, setToggle, toggle }) => {
	const keyPressBlur = () => {
		!setToggle()
	}

	useEffect(() => {
		const close = (e: any) => {
			if (e.keyCode === 27) {
				keyPressBlur()
			}
		}
		window.addEventListener('keydown', close)
		return () => window.removeEventListener('keydown', close)
	}, [])

	return (
		<>
			<Backdrop
				className={`${toggle?.open ? 'open' : ``}${toggle?.close ? 'close' : ``}`}
				open={toggle?.open}
				close={toggle?.close}
				onClick={() => setToggle()}
			/>
			<s.Dialog
				direction={direction}
				className={`${toggle?.open ? 'open' : ``}${toggle?.close ? 'close' : ``}`}
			>
				<s.DialogContainer
					className={`${toggle?.open ? 'open' : ``}${toggle?.close ? 'close' : ``}`}
				>
					<s.DialogClose
						onClick={() => setToggle()}
						className={`${toggle?.open ? 'open' : ``}${toggle?.close ? 'close' : ``}`}
					>
						{closeIcon}
					</s.DialogClose>
					{content}
				</s.DialogContainer>
			</s.Dialog>
		</>
	)
}

export default Dialog
