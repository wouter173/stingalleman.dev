module.exports = {
	purge: {
		content: [
			"./src/**/*.svelte",
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blue: {
					950: '#020f2b',
					1000: '#05011f'
				},
				purple: {
					950: '#241c59'
				},
				blackblue: {
					100: 'rgb(33, 32, 34)'
				}
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}