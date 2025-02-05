import { Animate } from '@/components/animate'
import { LinkButton } from '@/components/ui/LinkButton'
import { businessManImg } from '../images/homeImg'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

export const CallToActionSection = () => {
	const { t } = useTranslation(undefined, { keyPrefix: 'home' })

	const { lang } = useParams()

	return (
		<section className="code-section font-['Poppins']" id='tkoswo'>
			<div className='container pb-20 lg:pt-32'>
				<div id='call-to-action' className=''>
					<div className='primary-color-bg relative flex flex-1 items-center justify-center rounded-3xl md:h-[535px] bg-blue-600'>
						<div className='flex h-full w-full flex-row'>
							<div className='relative flex w-full flex-col overflow-hidden rounded-3xl py-24 pl-12 pr-12 text-white md:w-1/2 lg:pl-36'>
								<div className='primary-color-border primary-color-[-100] absolute -left-16 -top-16 h-[300px] w-[300px] rounded-full border-[50px] border-blue-500'></div>
								<div className='relative z-10 text-center md:text-left'>
									<Animate type='left-to-right' className='mb-4 text-sm'>
										{t('call-to-action.subheader')}
									</Animate>
									<Animate
										type='left-to-right'
										className='mb-4 text-3xl font-bold lg:text-4xl xl:text-5xl'
									>
										{t('call-to-action.header')}
									</Animate>
									<Animate type='left-to-right' className='mb-12 text-base'>
										{t('call-to-action.subtext')}
									</Animate>
									<Animate type='left-to-right'>
										<LinkButton
											href={`/${lang}/quote`}
											className='bg-white px-8 py-4 text-sm font-semibold text-blue-600 hover:bg-gray-100 uppercase'
										>
											{t('quote')}
										</LinkButton>
									</Animate>
								</div>
							</div>
							<div className='relative hidden md:block md:w-1/2'>
								<div className='absolute bottom-0 lg:h-[110%] xl:left-12 xl:h-[125%]'>
									<div className='absolute right-0 top-48 h-[145px] w-[150px] bg-[radial-gradient(#cccccc,transparent_3px)] [background-size:16px_16px] 2xl:-right-9 2xl:w-[190px]'></div>
									<Animate
										type='right-to-left'
										className='dont-replace relative z-20 h-full'
									>
										<img
											loading='lazy'
											className='h-full'
											src={businessManImg}
											alt='Business Owner'
										/>
									</Animate>
								</div>
								<div className='absolute h-full w-full overflow-hidden rounded-3xl'>
									<div className='primary-color-border primary-color-[-100] absolute -bottom-16 -right-16 h-[300px] w-[300px] rounded-full border-[50px] border-blue-500'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
