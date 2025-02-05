import { Animate } from '@/components/animate'
import { LinkButton } from '@/components/ui/LinkButton'
import { heroImg } from '../images/homeImg'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

export const HeroSection = () => {
	const { t } = useTranslation(undefined, { keyPrefix: 'home' })

	const { lang } = useParams()
	return (
		<section className="primary-color-bg primary-color-[50] code-section relative font-['Poppins'] bg-blue-50">
			<div className='container relative z-10 lg:pb-32'>
				<div className='relative z-10 flex flex-col items-center lg:flex-row'>
					<div className='mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14'>
						<Animate type='left-to-right'>
							<h1 className='mb-8 text-center font-bold lg:text-left flex flex-col gap-5'>
								<span className='text-gray-700 text-3xl xl:text-5xl 2xl:text-6xl'>
									{t('hero.title.line1')}
								</span>
								<span className='primary-color-text text-gray-700 text-3xl xl:text-5xl 2xl:text-6xl'>
									{t('hero.title.line2')}
								</span>
							</h1>
						</Animate>
						<Animate type='left-to-right'>
							<p className='text-center text-gray-700 lg:text-left'>
								{t('hero.description1')}
							</p>
							<p className='mb-8 text-center text-gray-700 lg:text-left'>
								{t('hero.description2')}
							</p>
						</Animate>
						<Animate
							type='left-to-right'
							className='flex items-center justify-center lg:justify-start gap-5 mb-12 text-center lg:text-left'
						>
							<LinkButton
								href={`/${lang}/quote`}
								className='bg-white px-5 text-xs font-semibold text-blue-600 hover:bg-gray-100 uppercase'
							>
								{t('quote')}
							</LinkButton>
							<LinkButton
								href={`/${lang}/services`}
								className='px-5 text-xs uppercase'
							>
								{t('service')}
							</LinkButton>
						</Animate>
					</div>
					<Animate
						type='right-to-left'
						className='relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6'
					>
						<div className='primary-color-border absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-blue-600 border-l-blue-600'></div>
						<div className='absolute -right-9 top-16 h-[145px] w-[190px] bg-[radial-gradient(#cccccc_3px,transparent_3px)] [background-size:16px_16px]'></div>
						<img
							loading='lazy'
							src={heroImg}
							alt='Hero'
							className='seo-image relative mt-8 aspect-square w-full rounded-2xl object-cover lg:mt-0'
						/>
					</Animate>
				</div>
			</div>
			<div className='primary-color-border primary-color-[100] absolute -left-56 -top-24 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100'></div>
			<div className='absolute bottom-0 top-0 hidden h-full w-full overflow-hidden lg:block'>
				<div className='primary-color-border primary-color-[100] absolute -right-60 bottom-14 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100'></div>
			</div>
		</section>
	)
}
