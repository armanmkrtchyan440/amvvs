import { Animate } from '@/components/animate'
import { serviceImg } from '../images/homeImg'
import { useTranslation } from 'react-i18next'

export const ServiceSection = () => {
	const { t } = useTranslation(undefined, { keyPrefix: 'home' })

	return (
		<section
			id='services'
			className="code-section bg-white py-20 font-['Poppins']"
		>
			<div className='container'>
				<Animate type='left-to-right'>
					<h2 className='mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl'>
						{t('services.title')}
					</h2>
				</Animate>
				<Animate type='right-to-left'>
					<h3 className='mx-auto mb-12 w-3/4 text-center font-thin text-gray-700'>
						{t('services.description')}
					</h3>
				</Animate>

				<div className='flex flex-row'>
					<Animate type='left-to-right' className='hidden w-[30%] xl:block'>
						<img
							loading='lazy'
							src={serviceImg}
							alt='Hero'
							className='relative mt-8 h-full rounded-2xl object-cover lg:mt-0'
						/>
					</Animate>
					<div className='grid w-full grid-cols-1 gap-y-12 md:grid-cols-3 xl:w-[70%]'>
						<Animate
							type='left-to-right'
							className='flex-1 bg-white px-8 text-center md:max-w-xs'
						>
							<div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-4xl text-blue-500'>
								<i className='fa-duotone fa-wrench'></i>
							</div>
							<h4 className='mb-4 text-2xl font-semibold'>
								{t('services.service1.title')}
							</h4>
							<p className='text-gray-700'>
								{t('services.service1.description')}
							</p>
						</Animate>
						<Animate
							type='top-to-bottom'
							className='flex-1 bg-white px-8 text-center md:max-w-xs'
						>
							<div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-4xl text-orange-500'>
								<i className='fa-duotone fa-water'></i>
							</div>
							<h4 className='mb-4 text-2xl font-semibold'>
								{t('services.service2.title')}
							</h4>
							<p id='service-2-text' className='text-gray-700'>
								{t('services.service2.description')}
							</p>
						</Animate>
						<Animate
							type='right-to-left'
							className='flex-1 bg-white px-8 text-center md:max-w-xs'
						>
							<div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-100 text-4xl text-rose-500'>
								<i className='fa-duotone fa-sink'></i>
							</div>
							<h4 className='mb-2 text-2xl font-semibold'>
								{t('services.service3.title')}
							</h4>
							<p className='text-gray-700'>
								{t('services.service3.description')}
							</p>
						</Animate>
						<Animate
							type='left-to-right'
							className='flex-1 bg-white px-8 text-center md:max-w-xs'
						>
							<div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-4xl text-teal-500'>
								<i className='fa-duotone fa-pipe'></i>
							</div>
							<h4 className='mb-2 text-2xl font-semibold'>
								{t('services.service4.title')}
							</h4>
							<p className='break-words text-gray-700'>
								{t('services.service4.description')}
							</p>
						</Animate>
						<Animate
							type='bottom-to-top'
							className='flex-1 bg-white px-8 text-center md:max-w-xs'
						>
							<div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-stone-100 text-4xl text-stone-500'>
								<i className='fa-duotone fa-shower'></i>
							</div>
							<h4 className='mb-2 text-2xl font-semibold'>
								{t('services.service5.title')}
							</h4>
							<p className='text-gray-700'>
								{t('services.service5.description')}
							</p>
						</Animate>
						<Animate
							type='right-to-left'
							className='flex-1 bg-white px-8 text-center md:max-w-xs'
						>
							<div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-4xl text-violet-500'>
								<i className='fa-duotone fa-tools'></i>
							</div>
							<h4 className='mb-2 text-2xl font-semibold'>
								{t('services.service6.title')}
							</h4>
							<p className='text-gray-700'>
								{t('services.service6.description')}
							</p>
						</Animate>
					</div>
				</div>
			</div>
		</section>
	)
}
