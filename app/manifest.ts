import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Baldu montavimas',
		short_name: 'Montavimas',
		description: 'Nestandartinių baldų montavimo paslaugos',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#000000',
		icons: [
			{
				src: '/cabinet-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/cabinet-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	}
}
