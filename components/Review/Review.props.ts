import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
}
