import { Box } from '@core/layout'
import { FC } from 'react'



// [Interfaces]
import {IBanner} from './Banner.interfaces'
// [Styles]
import * as s from './Banner.styled'

const Banner: FC<IBanner> = ({supertitle, color, size, title, copy}) => {

	return (
		<s.Banner color={color} size={size}>
		{
		supertitle &&	<s.Supertitle>
			{supertitle}
		</s.Supertitle>
		}
		{
		title && <s.Title>
			{title}
		</s.Title>
		}

		{
		copy &&	<s.Copy>
			{copy}
		</s.Copy>
		}
		</s.Banner>
	)
}


export default Banner
