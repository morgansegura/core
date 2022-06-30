import { FC } from 'react'
// [Helpers]
import { useInitials } from '@helpers/utils'
// [Interfaces]
import { IAvatar } from './Avatar.interfaces'
// [Styles]
import * as s from './Avatar.styled'

const Avatar: FC<IAvatar> = ({ initials, children, color, src, srcSet, sizes, alt, variant }) => {
	return (
		<s.Avatar color={color} variant={variant}>
			{src && srcSet && sizes ? (
				<img src={src} srcSet={srcSet} sizes={sizes} alt={alt} />
			) : src && srcSet && !sizes ? (
				<img src={src} srcSet={srcSet} alt={alt} />
			) : src && !srcSet && !sizes ? (
				<img src={src} alt={alt} />
			) : (
				``
			)}
			{initials && typeof initials === 'string' && useInitials(initials)}
			{children}
		</s.Avatar>
	)
}

export default Avatar
