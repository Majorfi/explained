const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	mode: 'jit',
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
		theme: {
			height: theme => ({
				auto: 'auto',
				...theme('spacing'),
				full: '100%',
				screen: 'calc(var(--vh) * 100)',
			}),
			minHeight: theme => ({
				'0': '0',
				...theme('spacing'),
				full: '100%',
				screen: 'calc(var(--vh) * 100)',
			}),
		},
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
		screens: {
			'xs': '375px',
			...defaultTheme.screens,
		},
		extend: {
			maxWidth: {
				'screen-lg': '1000px'
			},
			fontFamily: {
				rubik: ['Rubik', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
			},
			fontSize: {
				'2xl': ['1.5rem', '1.7775rem'],
				'4xl': ['2.5rem', '2.9375rem'],
				'8xl': ['5rem', '5.925rem'],
				'xxl': ['12.5rem', '14.8125rem'],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
};