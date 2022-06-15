import BasketItem from './BasketItem';

const BasketList = ({
	order = [],
	handleBasketShow = Function.prototype,
	removeFromBasket = Function.prototype,
}) => {
	const totalPrice = order.reduce((sum, elem) => {
		return sum + elem.price * elem.quantity;
	}, 0);

	return (
		<ul className='collection basket-list'>
			<li className='collection-item active'>Корзина</li>
			{order.length ? (
				order.map(item => {
					return (
						<BasketItem
							key={item.id}
							{...item}
							removeFromBasket={removeFromBasket}
						/>
					);
				})
			) : (
				<li className='collection-item'>Корзина пуста</li>
			)}

			<li className='collection-item active'>
				Общая стоимость: {totalPrice} руб
			</li>
			<i className='material-icons basket-close' onClick={handleBasketShow}>
				close
			</i>
		</ul>
	);
};

export default BasketList;
