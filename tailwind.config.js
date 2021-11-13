const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	corePlugins: {
		ringColor: false,
	},
	purge: {
		content: [
			'./pages/**/*.js',
			'./components/**/*.js'
		],
		safelist: [
			'dark',
			'dark:',
			'dark:text-dark-50',
			'dark:border-dark-200',
			'dark:bg-dark-600',
			'dark:bg-dark-400',
			'dark:bg-dark-300',
		]
	},
	theme: {
		fontFamily: {
			mono: ['IBM Plex Mono', 'monospace']
		},
		colors: {
			white: colors.white,
			pending: '#FFB800',
			dark: {
				900: '#09162E',
				600: '#13264B',
				400: '#18305F',
				300: '#2f446f',
				200: '#46597e',
				100: '#5d6e8f',
				50: '#ced3dd',
			},
		},
		extend: {
			lineHeight: {
				11: '3.25rem',
				'120px': '120px'
			},
			fontSize: {
				'xxs': '0.6rem',
				'xs': '0.7rem',
				'3xl': '2rem',
				'7xl': '5rem',
				'sm': '0.8rem',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
};