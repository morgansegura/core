import { FC } from 'react'

// [Interfaces]
import { IAppBar } from './AppBar.interfaces'
// [Styles]
import * as s from './AppBar.styled'

const AppBar: FC<IAppBar> = ({ children }) => {
	return <s.AppBar>{children}</s.AppBar>
}

export default AppBar
