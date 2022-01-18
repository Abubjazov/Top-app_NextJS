import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	fontSz: 's' | 'm' | 'l',
	innerText: string
}
