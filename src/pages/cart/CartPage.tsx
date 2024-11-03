import { useCartItems } from '@/stores/useCartItems'
import { calculateRot } from '@/utils/calculateRot'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { CartItem } from './components/CartItem'
import { MobileCartItem } from './components/MobileCartItem'

export const CartPage = () => {
	const { t } = useTranslation(undefined, { keyPrefix: 'carts' })

	const { cartItems, rot, toggleRot } = useCartItems()
	const { lang } = useParams()

	const subtotal = useMemo(() => {
		const total = cartItems.reduce(
			(prev, cart) =>
				prev +
				cart.price * cart.quantity +
				cart.bortforsling * cart.bortforslingQuantity,
			0
		)

		console.log(cartItems)

		return rot ? calculateRot(total) : total
	}, [cartItems, rot])

	return (
		<section className="code-section bg-white py-20 font-['Poppins']">
			<div className='container'>
				<h1 className='mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl'>
					{t('title')}
				</h1>
				{cartItems.length === 0 && <h2>{t('empty-card')}</h2>}

				{cartItems.length !== 0 && (
					<>
						<div className='overflow-x-auto hidden md:block'>
							<table className='cart-items-table '>
								<thead>
									<tr>
										<th>{t('table.name')}</th>
										<th>{t('table.price')}</th>
										<th>{t('table.quantity')}</th>
										<th>{t('table.total')}</th>
										<th>{t('table.actions')}</th>
									</tr>
								</thead>
								<tbody>
									{cartItems.map(cart => (
										<CartItem key={cart.uid} {...cart} />
									))}
								</tbody>
							</table>
						</div>
						<div className='grid grid-cols-1 gap-4 md:hidden'>
							{cartItems.map(cart => (
								<MobileCartItem key={cart.uid} {...cart} />
							))}
						</div>
						<div className='w-full max-w-60 mt-5 ml-auto'>
							<div className='border-b py-3'>
								<label
									htmlFor='one'
									className='flex w-full justify-between items-center'
								>
									<span>{t('rot-deduction')}</span>
									<input
										id='one'
										type='checkbox'
										checked={rot}
										onChange={() => toggleRot()}
									/>
								</label>
							</div>
							<table className='w-full max-w-60 my-3'>
								<tbody>
									<tr>
										<th className='text-left text-lg font-bold'>
											{t('sub-total')}
										</th>
										<td rowSpan={2} className='text-2xl font-bold text-right'>
											{subtotal}kr
										</td>
									</tr>
									<tr>
										<td className='text-left text-sm opacity-50 leading-none'>
											{cartItems.length} {t('items')}
										</td>
									</tr>
								</tbody>
							</table>
							<Link
								to={`/${lang}/kassa`}
								className='block text-center primary-color-bg rounded px-8 py-3 text-white bg-blue-600 hover:bg-blue-500 mt-5 w-full'
							>
								{t('complete')}
							</Link>
						</div>
					</>
				)}
			</div>
		</section>
	)
}
