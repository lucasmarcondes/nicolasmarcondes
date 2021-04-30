export default {
	ssr: false,
	target: 'static',
	router: {
		base: '/nicolasmarcondes/',
	},
	head: {
		title: 'Nicolas Marcondes',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	components: true,
	modules: ['bootstrap-vue/nuxt'],
}