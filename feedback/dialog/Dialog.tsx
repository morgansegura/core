import { createContext, FC, useContext, useEffect, useRef, useState } from 'react'

// [Core]
import { Backdrop } from '@core/feedback/backdrop'
// [Interfaces]
import { IDialog, IDialogProvider, IDialogTrigger } from './Dialog.interfaces'
// [Styles]
import * as s from './Dialog.styled'

export const ActiveDialogContext = createContext<any | null>(null)

export const DialogProvider: FC<IDialogProvider> = ({ children }) => {
	const [toggle, setToggle] = useState(ActiveDialogContext)
	return (
		<ActiveDialogContext.Provider value={[toggle, setToggle]}>
			{children}
		</ActiveDialogContext.Provider>
	)
}

export const DialogTrigger: FC<IDialogTrigger> = ({ children, open, close, onClick }) => {
	const triggerRef = useRef<HTMLDivElement>(null)
	const [toggle, setToggle] = useContext(ActiveDialogContext)

	const toggleDialog = () => {
		setToggle({
			open: !toggle.open,
			close: !toggle.close,
		})
		console.log('clicked dialog')
	}

	const keyPressBlur = () => {
		setToggle(!toggle)
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
		<s.DialogTrigger
			ref={triggerRef}
			open={toggle.open}
			close={toggle.close}
			onClick={toggleDialog}
			className={`${toggle.open ? 'open' : ``} ${toggle.close ? 'close' : ``}`}
		>
			<>{children}</>
		</s.DialogTrigger>
	)
}

const Dialog: FC<IDialog> = ({ content, title, closeIcon, direction }) => {
	const [toggle, setToggle] = useContext(ActiveDialogContext)
	return (
		<DialogProvider>
			<Backdrop
				className={`${toggle.open ? 'open' : ``} ${toggle.close ? 'close' : ``}`}
				open={toggle.open}
				close={toggle.close}
				onClick={() => setToggle({ open: false, close: true })}
			/>
			<s.Dialog
				direction={direction}
				open={toggle.open}
				close={toggle.close}
				className={`${toggle.open ? 'open' : ``} ${toggle.close ? 'close' : ``}`}
			>
				<s.DialogContainer
					className={`${toggle.open ? 'open' : ``} ${toggle.close ? 'close' : ``}`}
				>
					<s.DialogClose
						onClick={() => setToggle(!toggle)}
						className={`${toggle.open ? 'open' : ``} ${toggle.close ? 'close' : ``}`}
					>
						{closeIcon}
					</s.DialogClose>
					{content}
				</s.DialogContainer>
			</s.Dialog>
		</DialogProvider>
	)
}

export default Dialog
