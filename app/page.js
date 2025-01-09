import BusinessCard from './components/BusinessCard.jsx'
import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-gray-900 to-gray-800'>
			<div className='flex-grow flex items-center justify-center'>
				<div className='transform hover:scale-105 transition-transform duration-300 shadow-xl'>
					<BusinessCard />
				</div>
			</div>
			<p className='text-gray-600 mt-8 text-lg'>
				<Link
					href='https://hexen.lt'
					className='hover:underline'
					target='_blank'
					rel='noopener noreferrer'
				>
					Nori tokios kortelės?
				</Link>
			</p>
		</main>
	)
}
