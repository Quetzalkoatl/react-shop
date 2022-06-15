const Cart = ({quantity, handleBasketShow = Function.prototype}) => {
	return (
		<div className='cart blue darken-4 white-text' onClick={handleBasketShow}>
			<i className='material-icons'>shopping_cart</i>
			{quantity ? <span className='cart-quantity'>{quantity}</span> : null}
		</div>
	);
};

export default Cart;
