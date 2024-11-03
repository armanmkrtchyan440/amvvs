import { CartItemType, useCartItems } from '@/stores/useCartItems'
import { calculateRot } from '@/utils/calculateRot'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const KassaItem: FC<CartItemType> = ({
	name,
	price,
	quantity,
	uid,
	bortforsling,
	bortforslingQuantity,
}) => {
	const { t } = useTranslation(undefined, { keyPrefix: 'carts' })

	const {
		incrementQuantity,
		decrementQuantity,
		incrementBortforslingQuantity,
		decrementBortforslingQuantity,
		rot,
	} = useCartItems()

	const rotPrice = useMemo(
		() => (rot ? calculateRot(price * quantity) : price * quantity),
		[rot, price, quantity]
	)

	const rotBortforslingPrice = useMemo(
		() =>
			rot
				? calculateRot(bortforsling * bortforslingQuantity)
				: bortforsling * bortforslingQuantity,
		[rot, bortforsling, bortforslingQuantity]
	)

	return (
		<div className='border-t'>
			<div className='flex justify-between items-center py-4'>
				<div>
					<h3>{name}</h3>
					<span>
						{rotPrice}:- {rot && t('after-rot')}
					</span>
				</div>
				<div className='flex justify-center items-center gap-5'>
					<button
						className='quantity-button'
						onClick={() => decrementQuantity(uid)}
					>
						-
					</button>
					<span>{quantity}</span>
					<button
						className='quantity-button'
						onClick={() => incrementQuantity(uid)}
					>
						+
					</button>
				</div>
			</div>
			{rotBortforslingPrice != 0 && (
				<div className='flex justify-between items-center py-4'>
					<div>
						<h3>{t('removal')}</h3>
						<span>
							{rotBortforslingPrice}:- {rot && t('after-rot')}
						</span>
					</div>
					<div className='flex justify-center items-center gap-5'>
						<button
							className='quantity-button'
							onClick={() => decrementBortforslingQuantity(uid)}
						>
							-
						</button>
						<span>{bortforslingQuantity}</span>
						<button
							className='quantity-button'
							onClick={() => incrementBortforslingQuantity(uid)}
						>
							+
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
