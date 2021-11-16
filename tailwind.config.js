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
		colors: {
			white: colors.white,
			highlight: '#0657F9',
			dark: {
				900: '#081A3E',
				600: '#13264B',
				500: '#394865',
				400: '#18305F',
				300: '#2f446f',
				200: '#46597e',
				100: '#838C9E',
				50: '#ced3dd',
			},
		},
		extend: {
			maxWidth: {
				'screen-lg': '1000px'
			},
			fontFamily: {
				rubik: ['Rubik', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
			},
			fontSize: {
				'4xl': ['2.5rem', '2.9375rem'],
				'xxl': ['12.5rem', '14.8125rem'],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
};