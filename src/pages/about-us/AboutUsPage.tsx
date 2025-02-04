import {Helmet} from 'react-helmet-async'
import {useTranslation} from 'react-i18next'
import {aboutUsBigImg, aboutUsSmallImg} from './images/aboutImg'
import {useParams} from 'react-router-dom'

export const AboutUsPage = () => {
    const {t} = useTranslation(undefined, {keyPrefix: 'home'})
    const {lang} = useParams()
    return (
        <section
            id='about'
            className="code-section relative bg-white font-['Poppins']"
        >
            <Helmet>
                <title>{t('about.header')}</title>
                <meta name='description' content={t('about.paragraph1')}/>
                <meta property='og:title' content={t('about.header')}/>
                <meta property='og:description' content={t('about.paragraph1')}/>
            </Helmet>
            <div className='container relative z-10 lg:pb-12'>
                <div className='relative z-10 flex flex-col items-center lg:flex-row'>
                    <div className='mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14'>
                        <h1
                            id='about-header-text'
                            className='mb-8 text-center text-4xl font-bold lg:text-left xl:text-5xl 2xl:text-6xl'
                        >
                            {t('about.header')}
                        </h1>
                        <p
                            id='about-first-paragraph'
                            className='mb-8 text-center text-gray-700 lg:text-left'
                        >
                            {t('about.paragraph1')}
                        </p>
                        <div
                            id='about-checkmark-list'
                            className='mb-8 pl-0 md:pl-8 text-center text-gray-700 lg:text-left'
                        >
                            <ul>
                                <li className='mb-4 flex flex-row'>
                                    <i
                                        className='fa fa-check mr-4 mt-1 text-green-500'
                                        aria-hidden='true'
                                    ></i>
                                    <span id='about-checkmark-list-item-1'>
										{t('about.list.item1')}
									</span>
                                </li>
                                <li className='mb-4 flex flex-row'>
                                    <i
                                        className='fa fa-check mr-4 mt-1 text-green-500'
                                        aria-hidden='true'
                                    ></i>
                                    <span id='about-checkmark-list-item-2'>
										{t('about.list.item2')}
									</span>
                                </li>
                                <li className='mb-4 flex flex-row'>
                                    <i
                                        className='fa fa-check mr-4 mt-1 text-green-500'
                                        aria-hidden='true'
                                    ></i>
                                    <span id='about-checkmark-list-item-3'>
										{t('about.list.item3')}
									</span>
                                </li>
                            </ul>
                        </div>
                        <p
                            id='about-second-paragraph'
                            className='mb-12 text-center text-gray-700 lg:text-left'
                        >
                            {t('about.paragraph2')}
                        </p>
                        {/* <div
                id="about-cta-button"
                className="mb-12 text-center lg:text-left"
              >
                <Button variant="modal" className="px-8 py-4 font-semibold">
                  Learn More
                </Button>
              </div> */}
                    </div>
                    <div className='relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6'>
                        <div
                            className='primary-color-border absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-blue-600 border-l-blue-600'></div>
                        <div
                            className='absolute -right-9 top-16 h-[145px] w-[190px] bg-[radial-gradient(#cccccc_3px,transparent_3px)] [background-size:16px_16px]'></div>
                        <img
                            loading='lazy'
                            src={aboutUsBigImg}
                            alt='Hero'
                            className='relative mt-8 aspect-square w-full rounded-2xl object-cover lg:mt-0'
                            data-media='{"id":"IxfhMTROke8","src":"unsplash","type":"image"}'
                        />
                        <div className='absolute bottom-0 right-0 z-10 aspect-square w-[45%] rounded-2xl bg-white p-6'>
                            <img
                                loading='lazy'
                                src={aboutUsSmallImg}
                                alt='Hero'
                                className='relative mt-8 h-full object-cover lg:mt-0'
                                data-media='{"id":"TtN_obfWlGw","src":"unsplash","type":"image"}'
                            />
                        </div>
                    </div>
                </div>
                <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4502.451397862958!2d18.04866014418022!3d59.316888733258466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e7e3617c21%3A0xf7efd85149cba2ce!2sHornsgatan%2079%2C%20118%2049%20Stockholm!5e0!3m2!1sen!2sse!4v1738695987438!5m2!1sen!2sse&hl=sv`}
                    width='100%'
                    height='450'
                    style={{border: 0}}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    className='mt-10'
                ></iframe>
            </div>
        </section>
    )
}
