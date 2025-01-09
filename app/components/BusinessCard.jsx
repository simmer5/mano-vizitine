'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BusinessCard() {
	const [isFlipped, setIsFlipped] = useState(false)

	const handleFlip = () => {
		setIsFlipped(!isFlipped)
	}

	return (
		<div
			className='w-96 h-56 [perspective:1000px] cursor-pointer'
			onClick={handleFlip}
			onKeyDown={e => e.key === 'Enter' && handleFlip()}
			role='button'
			tabIndex={0}
			aria-label='Flip business card'
		>
			<div
				className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
					isFlipped ? '[transform:rotateY(180deg)]' : ''
				}`}
			>
				{/* Front side */}
				<div className='absolute w-full h-full [backface-visibility:hidden]'>
					{/* <div className='w-full h-full p-6 bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col justify-center items-center overflow-hidden'> */}
					<div className='w-full h-full p-6 inset-0 bg-gradient-to-bl from-black via-purple-950 to-black text-white flex flex-col justify-center items-center overflow-hidden'>
						{/* <div className='absolute inset-0 bg-gradient-to-bl from-black via-purple-900 to-black'> */}
						<div className='w-full border-b border-gray-500 mb-4'></div>
						<h2 className='text-3xl font-bold mb-4'>Mindaugas</h2>
						{/* <p className='mb-2'>Email: john@example.com</p> */}
						<Link
							href='tel:+11234567890'
							onClick={e => e.stopPropagation()}
							className='hover:underline focus:underline'
						>
							Tel: +370 60188882
						</Link>
						<div className='w-full border-t border-gray-500 mt-4'></div>
					</div>
				</div>

				{/* Back side */}
				<div className='absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]'>
					<div className='w-full h-full p-6 inset-0 bg-gradient-to-bl from-black via-purple-950 to-black text-white flex flex-col justify-center items-center overflow-hidden'>
						<div className=' flex items-center justify-center'>
							<h2 className='text-2xl font-bold mb-4'>Baldų montavimas</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
