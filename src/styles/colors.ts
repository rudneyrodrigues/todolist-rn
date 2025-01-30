export type Colors = {
	white: string
	black: string

	purple: {
		light: string
		base: string
		dark: string
	}
	green: {
		light: string
		base: string
		dark: string
	}
	gray: {
		100: string
		200: string
		300: string
		400: string
		500: string
		600: string
	}
	danger: string
}

export const colors: Colors = {
	white: '#FFFFFF',
	black: '#000000',

	purple: {
		light: '#DDD2EF',
		base: '#9359F3',
		dark: '#6F3CC3'
	},
	green: {
		light: '#BFE3D0',
		base: '#479C6E',
		dark: '#2D6C4A'
	},
	gray: {
		100: '#F0EDF2',
		200: '#E5E2E9',
		300: '#E0DCE4',
		400: '#D1CBD7',
		500: '#6B6572',
		600: '#262428'
	},
	danger: '#C2464D'
}
