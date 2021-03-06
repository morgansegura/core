import { createContext, FC, useContext, useEffect, useRef, useState } from 'react'

import { Backdrop } from 'core/feedback'

// [Interfaces]
import { IDrawer, IDrawerTrigger, IDrawerProvider } from './Drawer.interfaces'
// [Styles]
import * as s from './Drawer.styled'

export const ActiveDrawerContext = createContext<any | null>(null)

export const DrawerProvider: FC<IDrawerProvider> = ({ children }) => {
	const [toggle, setToggle] = useState({
		open: false,
		close: true,
	})
	return (
		<ActiveDrawerContext.Provider value={[toggle, setToggle]}>
			{children}
		</ActiveDrawerContext.Provider>
	)
}

export const DrawerTrigger: FC<IDrawerTrigger> = ({ children }) => {
	const triggerRef = useRef<HTMLDivElement>(null)
	const [toggle, setToggle] = useContext(ActiveDrawerContext)

	const toggleDrawer = () => {
		setToggle({
			open: !toggle.open,
			close: !toggle.close,
		})
	}

	const keyPressBlur = () => {
		setToggle({
			open: false,
			close: true,
		})
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
		<s.DrawerTrigger
			ref={triggerRef}
			open={toggle.open}
			close={toggle.close}
			onClick={toggleDrawer}
			className={`${toggle.open ? 'open' : ``} ${toggle.close ? 'close' : ``}`}
		>
			<>{children}</>
		</s.DrawerTrigger>
	)
}

const Drawer: FC<IDrawer> = ({ content, menu, closeIcon, direction = 'right' }) => {
	const [toggle, setToggle] = useContext(ActiveDrawerContext)
	return (
		<>
			<s.DrawerFrame
				open={toggle.open}
				close={toggle.close}
				className={`${toggle.open ? 'open' : ``} ${toggle.close ? 'close' : ``}`}
			>
				{content}
			</s.DrawerFrame>
			<Backdrop
				open={toggle.open}
				close={toggle.close}
				className={`${toggle.open ? 'open' : ``} ${toggle.close ? 'close' : ``}`}
				onClick={() => setToggle({ open: false, close: true })}
			/>
			<s.DrawerContainer
				direction={direction}
				open={toggle.open}
				close={toggle.close}
				className={`${toggle.open ? 'open' : ``} ${toggle.close ? 'close' : ``}`}
				// onClick={() => setToggle({ open: false, close: true })}
			>
				<s.DrawerMenuClose
					onClick={() => setToggle({ open: false, close: true })}
					className={`${toggle.open ? 'open' : ``} ${toggle.close ? 'close' : ``}`}
				>
					{closeIcon}
				</s.DrawerMenuClose>
				{menu}
			</s.DrawerContainer>
		</>
	)
}

export default Drawer
