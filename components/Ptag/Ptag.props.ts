import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	fontSz: 's' | 'm' | 'l'
	children: ReactNode
}
