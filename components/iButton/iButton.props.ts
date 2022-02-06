import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import MenuIcon from './menu.svg'
import RowIcon from './row.svg'
import CloseIcon from './close.svg'

export const icons = {
	MenuIcon,
	RowIcon,
	CloseIcon
}

export type IconName = keyof typeof icons

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'white'
	icon: IconName
}
