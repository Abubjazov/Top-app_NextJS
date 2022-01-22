import { MenuItem } from './menu.interface';

export interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[],
	firstCategory: number
}
