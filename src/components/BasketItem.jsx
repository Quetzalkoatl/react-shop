const BasketItem = ({
	id,
	name,
	price,
	quantity,
	removeFromBasket = Function.prototype,
}) => {
	return (
		<li className='collection-item'>
			{name} x {quantity} = {price * quantity} руб
			<span className='secondary-content'>
				<i
					className='material-icons basket-delete'
					onClick={() => removeFromBasket(id)}
				>
					close
				</i>
			</span>
		</li>
	);
};

export default BasketItem;
